import React, { useEffect, useState } from 'react'

import test from '@/utils/test'

function App() {
  const [image, setImage] = useState(<></>)

  useEffect(() => {
    import('@/assets/cover_banner.png?as=webp')
      .then((image) => {
        setImage(<img src={image.default} alt="" loading="lazy" />)
        return
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <>
      <div className="text-2xl text-blue-500">Custom React Toolchain</div>
      <div className="text-2xl text-red-500">{test()}</div>
      <div className="text-2xl text-red-500">{process.env.TEST_VARIABLE ?? 'No variable found'}</div>
      <p>Import from public folder</p>
      <img src={process.env.PUBLIC_URL + '/images/cover_banner.png'} alt="" />
      <p>Import from src folder</p>
      {image}
    </>
  )
}

export default App
