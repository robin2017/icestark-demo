import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@alifd/next'
import './global.scss'


import Router from './router'
ReactDOM.render(
  <ConfigProvider prefix="next-layout-">
    <Router />
  </ConfigProvider>,
  document.querySelector('#ice-container')
)