import { RouteConfig } from 'vue-router';
import { Home } from './Home';

export const HomeRoute: RouteConfig = {
  path: '/',
  component: Home,
  meta: {
    description: 'Home'
  }
};
