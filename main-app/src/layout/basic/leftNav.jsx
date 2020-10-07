import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Nav } from '@alifd/next';
import routeConfig from '@/routeConfig'

const getAppName = (pathname) => {
  //pathname肯定是/开头
  let arr = pathname.split('/')
  return '/' + arr[1]
}

//URL和menu双向绑定了
const LeftNav = () => {
  const location = useLocation()
  const { pathname } = location;
  console.log('location:', location, pathname)
  return (
    <Nav defaultSelectedKeys={[getAppName(pathname)]} >
      {routeConfig.map(({ name, path, icon }) =>
        <Nav.Item key={path} icon={icon}>
          <Link to={path}>{name}</Link>
        </Nav.Item>
      )}
    </Nav>
  )
}
export default LeftNav