import Vue = require('nativescript-vue');
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { Home } from '../../views/home';
import { Settings } from '../../views/Settings';

const routes = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        description: 'Home'
      }
    },
    {
      path: '/settings',
      component: Settings,
      meta: {
        description: 'Settings'
      }
    }
  ]
});

routes.replace('/');

export default routes;
