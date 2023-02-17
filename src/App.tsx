import React, { useEffect, useState } from 'react'

import pathAliasTest from '@/utils/test'

function App() {
  const [image, setImage] = useState(<></>)

  useEffect(() => {
    import('@/assets/cover_banner.png?as=webp')
      .then((image) => {
        setImage(<img src={image.default} alt="" loading="lazy" className="h-full w-full object-cover object-center" />)
        return
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <section>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Custom React Toolchain</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                This custom React toolchain includes Tailwind CSS, TypeScript, Webpack, Babel, ESLint, Prettier, and
                Jest. It also includes a few other useful tools like Husky pre-commit hooks, {pathAliasTest()}, and
                more. It is fully customizable and can be used as a starting point for any React project. Environment
                variables are also supported! {process.env.TEST_VARIABLE}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">{image}</div>
                <p className="mt-8 text-base text-gray-500">
                  This is an example of an image imported from the src folder. It was processed, optimized, and
                  converted to WebP format in production through Webpack!
                </p>
              </div>
              <div>
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/images/cover_banner.png'}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  This is an example of an image imported from the public folder. Webpack will not process this asset
                  and it will be served as is.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
