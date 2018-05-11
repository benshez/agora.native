import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from '../common/modules/user/store';
import { language } from '../common/modules/i18n/store';
import { routes } from '../common/modules/routes/store';
import { IRootState } from '../common/modules/base/interfaces/IRootState';
import { AgoraConfiguration } from '../common/system/constants/AgoraConfiguration';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user, language, routes },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
