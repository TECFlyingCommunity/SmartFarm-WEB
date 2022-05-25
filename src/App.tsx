import { ConfigProvider } from 'antd'
import React from 'react'

import Routes from './core/routes'

function App() {
  return (
    <>
      <ConfigProvider>
        <Routes />
      </ConfigProvider>
    </>
  )
}

export default App
