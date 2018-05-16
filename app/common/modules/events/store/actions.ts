import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import { IDynanicComponent } from '../';
import { IRootState } from '../../base/';
import * as mutationTypes from '../../base/store/mutationTypes';
import { state } from './state';

export const actions: ActionTree<IDynanicComponent, IRootState> = {
  [mutationTypes.DYNAMIC_COMPONENT_TOGGLE]({ commit }, component: IDynanicComponent) {
    commit(mutationTypes.DYNAMIC_COMPONENT_TOGGLE, component);
  }
};
