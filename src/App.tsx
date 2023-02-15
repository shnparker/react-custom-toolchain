import React from 'react'

import image from '@/assets/cover_banner.png'
import test from '@/utils/test'

function App() {
  return (
    <>
      <div className="text-2xl text-blue-500">Custom React Toolchain</div>
      <div className="text-2xl text-red-500">{test()}</div>
      <div className="text-2xl text-red-500">{process.env.TEST_VARIABLE ?? 'No variable found'}</div>

      <p>Import from public folder</p>
      <img src={process.env.PUBLIC_URL + '/images/cover_banner.png'} alt="" />

      <p>Import from src folder</p>
      <img src={image} alt="" />
    </>
  )
}

export default App
