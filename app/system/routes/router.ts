import Vue = require('nativescript-vue');
import VueRouter from 'vue-router';

import { AppRoutes } from '../../views';

Vue.use(VueRouter);

const routes = new VueRouter({
  pageRouting: true,
  routes: AppRoutes
});

routes.replace('/');

export default routes;
