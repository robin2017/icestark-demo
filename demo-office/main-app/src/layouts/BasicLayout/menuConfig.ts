const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie',
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie',
  },
  {
    name: 'Login',
    path: '/login',
    icon: 'account',
  },
  {
    name: '商家平台',
    icon: 'atm',
    path:'/seller',
    // children: [
    //   {
    //     path: '/seller',
    //     name: '商家首页',
    //   },
    //   {
    //     path: '/seller/detail',
    //     name: '商家详情',
    //   },
    // ],
  },
  {
    name: '小二平台',
    icon: 'account',
    path:'/waiter' //这里路径和子应用没有任何关系？？？！！！
    // children: [
    //   {
    //     path: '/waiter',
    //     name: '小二首页',
    //   },
    //   {
    //     path: '/waiter/list',
    //     name: '小二列表',
    //   },
    //   {
    //     path: '/waiter/detail',
    //     name: '小二详情',
    //   },
    //   {
    //     path: '/waiter/404',
    //     name: '小二 404',
    //   },
    // ],
  },
];

export { headerMenuConfig, asideMenuConfig };
