import Layout from '@/layout';
import HomePage from '@/page/home'
 
//只有一个页面，可以不用router
export default  [
  {
    path: '/',
    component:Layout,
    children:[
      {
        path:'/home',
        component:HomePage
      }
    ]
  }
];;
