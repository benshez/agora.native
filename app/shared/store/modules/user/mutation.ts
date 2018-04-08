import { MutationTree } from 'vuex';
import * as mutationTypes from '../../types';
import { IUser } from '../../../interfaces/user/IUser';
import { IRootState } from '../../../interfaces/store/IRootState';

export const mutations = <MutationTree<IRootState>>{
  [mutationTypes.GET_USER](state: IRootState, user: IUser) {
    console.log(mutationTypes.GET_USER, user);
    state.user = user;
  }
};
