import { RouteConfig } from 'vue-router';

export const NotFoundRoute: RouteConfig = {
  path: '*',
  redirect: '/home'
};
