import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from './modules/user';
import { IRootState } from '../interfaces/store/IRootState';
import { AgoraConstants } from '../system/constants/constants';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user },
  strict: AgoraConstants.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
