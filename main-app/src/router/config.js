import Layout from '@/layout';
import HomePage from '@/page/home'

export default [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/home',
                component: HomePage
            }
        ]
    }
]
