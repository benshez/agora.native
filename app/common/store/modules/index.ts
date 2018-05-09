import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from './user';
import { language } from './i18n';
import { IRootState } from '../../interfaces/store/IRootState';
import { AgoraConfiguration } from '../../system/constants/AgoraConfiguration';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user, language },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
