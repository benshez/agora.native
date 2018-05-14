import { MutationTree } from 'vuex';
import * as mutationTypes from '../../base/store/mutationTypes';
import { IUser } from '../interfaces/IUser';

export const mutations: MutationTree<IUser> = {
  [mutationTypes.GET_USER_BY_EMAIL](state: IUser, user: IUser) {
    Object.assign(state, user);
  },
  [mutationTypes.ADD_USER](state: IUser, user: IUser) {
    Object.assign(state, user);
  }
};
