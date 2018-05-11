import Vue = require('nativescript-vue');
import platformModule = require('tns-core-modules/platform');
import store from './store';
import routes from './router';
import { AgoraLodash } from './common/system/utilities/AgoraLodash';

Vue.config.silent = false;

Vue.use(AgoraLodash);

//Vue.prototype.$store = store;

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
);

Vue.registerElement(
  'RadDataForm',
  () => require('nativescript-ui-dataform').RadDataForm
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
