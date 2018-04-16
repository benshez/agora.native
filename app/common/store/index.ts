import Vue from 'vue';
import Vuex from 'vuex';
import { UserModule } from './modules/user';
import { AgoraConstants } from '../system/constants/constants';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { UserModule },
  strict: AgoraConstants.STORE_STRICT_MODE
});

export default store;
