// const VueLodash = {
//   install(Vue, _) {
//     Vue._ = _;
//     Object.defineProperties(Vue.prototype, {
//       _: {
//         get() {
//           return _;
//         }
//       }
//     });
//     Vue.mixin({
//       mounted() {}
//     });
//     if (typeof window !== 'undefined' && window.Vue) {
//       window.Vue.use(VueLodash);
//     }
//   }
// };

// module.exports = VueLodash;
// //import lodash from 'lodash';
const lodash = require('lodash');

const VueLodash = {
  install: function(Vue, options) {
    Vue.prototype.$_ = lodash;
  }
};

module.exports = VueLodash;
// //export const _ = lodash;
