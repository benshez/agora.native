import Vue = require('nativescript-vue');
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { Home } from '../../views/home';
import { Settings } from '../../views/Settings';
import { About } from '../../views/About';
import { Map } from '../../views/Map';

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
      path: '/about',
      component: About,
      meta: {
        description: 'About'
      }
    },
    {
      path: '/map',
      component: Map,
      meta: {
        description: 'Map'
      }
    },
    {
      path: '/settings',
      component: Settings,
      meta: {
        description: 'Settings'
      }
    },
    { path: '*', redirect: '/home' }
  ]
});

routes.replace('/');

export default routes;
