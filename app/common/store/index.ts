import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from './modules/user';
import { lang } from './modules/language';
import { IRootState } from '../interfaces/store/IRootState';
import { AgoraConfiguration } from '../system/constants/AgoraConfiguration';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user, lang },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
