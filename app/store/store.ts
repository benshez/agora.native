import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getStoreBuilder } from '../system/utilities/vue-typex';
import { IRootState } from '../interfaces/store/IRootState';

Vue.use(Vuex);

const store: Store<IRootState> = getStoreBuilder<IRootState>().vuexStore();

export default store;
