import { MutationTree } from 'vuex';
import * as mutationTypes from '../../base/store/mutationTypes';
import { IDynanicComponent } from '../interfaces/IDynanicComponent';

export const mutations: MutationTree<IDynanicComponent> = {
  [mutationTypes.DYNAMIC_COMPONENT_TOGGLE](state: IDynanicComponent, component: IDynanicComponent) {
    Object.assign(state, component);
  }
};
