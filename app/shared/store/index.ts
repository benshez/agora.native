import Vue from 'vue';
import Vuex from 'vuex';
import { IRootState } from '../interfaces/store/IRootState';
import { user } from './modules/user/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store<IRootState>({
  modules: { user },
  strict: debug
});

//Vue.prototype.$store = store;

export default store;
