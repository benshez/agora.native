import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from '../../user/store';
import { language } from '../../i18n/store';
import { routes } from '../../routes/store';
import { IRootState } from '../interfaces/IRootState';
import { AgoraConfiguration } from '../../../system/constants/AgoraConfiguration';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user, language, routes },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
