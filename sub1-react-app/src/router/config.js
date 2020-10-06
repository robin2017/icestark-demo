import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
export default [
  {
    path: '/',
    exact:true,
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
];
