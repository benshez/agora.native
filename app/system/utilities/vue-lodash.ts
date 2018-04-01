import lodash from 'lodash';

export const VueLodash = {
  install: function(Vue, options) {
    Vue.prototype.$_ = lodash;
  }
};
