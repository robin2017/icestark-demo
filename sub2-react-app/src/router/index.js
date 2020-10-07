import React from 'react'
import { BrowserRouter as Router, Switch, Route,withRouter } from 'react-router-dom'
import routes from './config'
console.log('withrouter:',withRouter)
//1、配置只支持四个属性:path,component,children,exact
//2、switch-route搭配使用，可以继续封装吗？
const RouterIndex = () => {
    return (
        //作为子应用，必须添加basename！！！
        <Router basename='sub2'>
            <Switch>
                {routes.map((route, id) => {
                    //给component重命名RouteComponent
                    const { component: RouteComponent, children, path,exact } = route
                    return (
                        <Route
                            exact={exact}
                            key={id}
                            path={path}
                            component={(props) => {
                                console.log('Route传递props:', props)
                                return children ? (
                                    <RouteComponent key={id} path={path}>
                                        <Switch>
                                            {children.map((routeChild, idx) =>
                                                <Route key={idx}
                                                    exact={routeChild.exact}
                                                    path={routeChild.path}
                                                    render={routeChild.component} />)}
                                        </Switch>
                                    </RouteComponent>
                                ) : <RouteComponent />
                            }}
                        />
                    )
                })}
            </Switch>
        </Router>
    )
}
export default RouterIndex
