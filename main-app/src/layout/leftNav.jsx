import React from 'react'
import { Link, withRouter } from 'ice';
import { Nav } from '@alifd/next';
import menuList from './menuList'

//URL和menu双向绑定了
const LeftNav = ({ location }) => {
  console.log('location:', location)
  const { pathname } = location;
  return (
    <Nav defaultSelectedKeys={[pathname]} >
      {menuList.map(menu =>
        <Nav.Item key={menu.path} icon={menu.icon}>
          <Link to={menu.path}>{menu.name}</Link>
        </Nav.Item>
      )}
    </Nav>
  )
}
// withRouter装饰器可以从props中获取history，location等对象
//https://ice.work/docs/guide/basic/api#withRouter
export default withRouter(LeftNav)