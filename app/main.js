const Vue = require('nativescript-vue');
const lodash = require('lodash');
const VueLodash = require('./utilities/vue-lodash');
const router = require('./router');
const store = require('./store');

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
);

//Vue.use(VueLodash, lodash);
Vue.use(VueLodash);

Vue.config.silent = false;

new Vue({
  router,
  store
}).$start();
