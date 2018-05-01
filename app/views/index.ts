import { RouteConfig } from 'vue-router';

import { AboutRoute } from './about';
import { HomeRoute } from './home';
import { MapRoute } from './map/index';
import { SettingsRoute } from './settings';
import { NotFoundRoute } from './error';

export const AppRoutes: Array<RouteConfig> = [
  AboutRoute,
  HomeRoute,
  MapRoute,
  SettingsRoute,
  NotFoundRoute
];
