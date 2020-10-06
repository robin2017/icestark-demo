import React from 'react'
import HomePage from '@/page/home'
export default [
    //1、内置组件，特殊属性component
    {
        name: '子应用',
        path: '/sub',
        icon: 'account',
        component: HomePage
    },
    //2、子应用，特殊属性url
    {
        name: '主页',
        path: '/home',
        icon: 'smile',
        url: [
            'http://localhost:3001/js/index.js',
            'http://localhost:3001/css/index.css',
        ]
    },
    //3、外链网页，特殊属性render
    {
        name: '百度',
        path: '/baidu',
        icon: 'account',
        render: () => {
            return <iframe style={{ height: '100%', width: '100%', border: '0px' }} src="https://www.baidu.com" />;
        }
    }]