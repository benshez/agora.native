const Vue = require('nativescript-vue');
const lodash = require('lodash');
const VueLodash = require('./utilities/vue-lodash');
const router = require('./router');
const store = require('./store');
const platformModule = require('tns-core-modules/platform');

// Vue.registerElement(
//   'RadSideDrawer',
//   () => require('nativescript-ui-sidedrawer').RadSideDrawer
// );

Vue.registerElement('RadSideDrawer', () => {
  return require('nativescript-ui-sidedrawer').RadSideDrawer;
});

//Vue.use(VueLodash, lodash);
Vue.use(VueLodash);

Vue.config.silent = false;

new Vue({
  router,
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
