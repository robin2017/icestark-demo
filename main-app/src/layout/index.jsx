import React from 'react'
import { AppRouter, AppRoute } from '@ice/stark';
import BasicLayout from './basic'
import HomePage from '../page/home'
export default () => {
  const handleRouteChange = (path) => {
    console.log('handleRouteChange:', path)
  }
  return (
    <BasicLayout>
      <AppRouter onRouteChange={handleRouteChange}>
        <AppRoute
          path="/sub"
          title="商家平台"
          url={[
            '//unpkg.com/icestark-child-seller/build/js/index.js',
            '//unpkg.com/icestark-child-seller/build/css/index.css',
          ]}
        />
        <AppRoute
          path="/home"
          title="主页"
          component={HomePage}
        />
      </AppRouter>
    </BasicLayout>
  )
}