import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './config'
//1、配置只支持三个属性:path,component,children
//2、switch-route搭配使用，可以继续封装吗？
const RouterIndex = () => {
    return (
        // <Router basename="robin">
        <Router>
            <Switch>
                {routes.map((route, id) => {
                    //给component重命名RouteComponent
                    const { component: RouteComponent, children, path } = route
                    return (
                        <Route
                            // exact={true}
                            key={id}
                            path={path}
                            component={() => {
                                return children ? (
                                    <RouteComponent key={id} path={path}>
                                        <Switch>
                                            {children.map((routeChild, idx) =>
                                                <Route key={idx}
                                                    // exact={true}
                                                    path={routeChild.path}
                                                    render={routeChild.component} />)}
                                        </Switch>
                                    </RouteComponent>
                                ) : <RouteComponent/>
                            }}
                        />
                    )
                })}
            </Switch>
        </Router>
    )
}
export default RouterIndex
