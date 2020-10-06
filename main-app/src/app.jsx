import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@alifd/next'
import './global.scss'
import Layout from './layout'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

ReactDOM.render(
  <ConfigProvider prefix="next-layout-">
    <Router>
      <Layout />
    </Router>
  </ConfigProvider>,
  document.querySelector('#ice-container')
)