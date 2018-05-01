import { RouteConfig } from 'vue-router';
import { Settings } from './Settings';

export const SettingsRoute: RouteConfig = {
  path: '/settings',
  component: Settings,
  meta: {
    description: 'Settings'
  }
};
