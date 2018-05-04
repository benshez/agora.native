import { i18n } from '../../language';

export const AgoraI18n = {
  install: function(Vue, options) {
    Vue.prototype.$i18n = i18n;
  }
}