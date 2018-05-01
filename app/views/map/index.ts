import { RouteConfig } from 'vue-router';
import { Map } from './Map';

export const MapRoute: RouteConfig = {
  path: '/map',
  component: Map,
  meta: {
    description: 'Map'
  }
};
