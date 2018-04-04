import Vue = require('nativescript-vue');
import platformModule = require('tns-core-modules/platform');
//import store from './store/store';
//import store from './store/modules/user/store';
import store from './store';
import routes from './system/routes/router';
import { VueLodash } from './system/utilities/vue-lodash';

Vue.config.silent = false;

Vue.use(VueLodash);

Vue.prototype.$store = store;

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
);

new Vue({
  router: routes,
  computed: {
    pageClasses: function() {
      return {
        'platform-ios': platformModule.isIOS,
        'platform-android': platformModule.isAndroid
      };
    }
  },
  store
}).$start();