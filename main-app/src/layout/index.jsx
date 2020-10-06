import React from 'react'
import { AppRouter, AppRoute } from '@ice/stark';
import BasicLayout from './basic'
import routes from '@/routeConfig'
export default () => {
  const handleRouteChange = (path) => {
    console.log('handleRouteChange:', path)
  }
  return (
    <BasicLayout>
      <AppRouter onRouteChange={handleRouteChange}>
        {routes.map(({ name, path, icon, ...other }) =>
          <AppRoute key={path} path={path} title={name} {...other} />
        )}
      </AppRouter>
    </BasicLayout>
  )
}