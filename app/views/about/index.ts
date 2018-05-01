import { RouteConfig } from 'vue-router';
import { About } from './About';

export const AboutRoute: RouteConfig = {
  path: '/about',
  component: About,
  meta: {
    description: 'About'
  }
};
