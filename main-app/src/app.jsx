import React from 'react'
import { createApp } from 'ice';
import { ConfigProvider } from '@alifd/next'
import './global.scss'
const appConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-layout-">{children}</ConfigProvider>
    )
  },
  router: {
    type: 'browser'
  }
}
createApp(appConfig)
