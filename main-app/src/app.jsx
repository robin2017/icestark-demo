import { createApp } from 'ice';
import './global.scss'
const appConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
  }
};
createApp(appConfig);
