import { MutationTree } from 'vuex';
import * as mutationTypes from '../../types';
import { IUser } from '../../../interfaces/user/IUser';
import { IRootState } from '../../../interfaces/store/IRootState';

export const mutations = <MutationTree<IUser>>{
  [mutationTypes.GET_USER_BY_EMAIL](state: IUser, user: IUser) {
    console.log(mutationTypes.GET_USER_BY_EMAIL, user);
    state = user;
  }
};
