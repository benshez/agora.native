import Vue = require('nativescript-vue');
import platformModule = require('tns-core-modules/platform');
import store from './store/store';
import routes from './system/routes/router';
import { VueLodash } from './system/utilities/vue-lodash';

Vue.config.silent = false;

Vue.use(VueLodash);

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
);

new Vue({
  router: routes,
  store,
  computed: {
    pageClasses: function() {
      return {
        'platform-ios': platformModule.isIOS,
        'platform-android': platformModule.isAndroid
      };
    }
  }
}).$start();
