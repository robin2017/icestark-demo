import React from 'react'
import { AppRouter, AppRoute } from '@ice/stark';
import BasicLayout from './basic'
export default () => {
  return (
    <BasicLayout>
      <AppRouter>
        <AppRoute
          path="/sub"
          title="商家平台"
          url={[
            '//unpkg.com/icestark-child-seller/build/js/index.js',
            '//unpkg.com/icestark-child-seller/build/css/index.css',
          ]}
        />
      </AppRouter>
    </BasicLayout>
  )
}