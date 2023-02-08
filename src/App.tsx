import React from 'react'
import test from '@/utils/test'

function App() {
  return (
    <>
      <div className="text-2xl text-blue-500">Custom React Toolchain</div>
      <div className="text-2xl text-red-500">{test()}</div>
      {/*<div className="text-2xl text-red-500">{process.env.TEST_VARIABLE || 'No variable found'}</div>*/}
    </>
  )
}

export default App
