import * as React from 'react';
import { createApp, IAppConfig } from 'ice'
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'framework',
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [{
        path: '/seller',
        title: '商家平台',
        sandbox: true,
        url:[
          'http://localhost:3101/js/index.js',
          'http://localhost:3101/css/index.css',
        ]
      }, 
      {
        path: '/waiter',
        title: '小二平台',
        sandbox: true,
        url: [
          'http://localhost:3102/js/index.js',
          'http://localhost:3102/css/index.css',
        ],
      }
    ];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

createApp(appConfig)
