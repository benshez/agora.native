import { MutationTree } from 'vuex';
import * as mutationTypes from '../../types';
import { IUser } from '../../../interfaces/user/IUser';
import { IRootState } from '../../../interfaces/store/IRootState';

export const mutations = <MutationTree<IUser>>{
  [mutationTypes.GET_USER_BY_EMAIL](state: IUser, user: IUser) {
    return (state = user);
  },
  [mutationTypes.USER_LOGIN_HAS_ERROR](state: IUser, hasError: boolean) {
    return (state.error = hasError);
  },
  [mutationTypes.USER_LOGIN_ERROR_MESSAGE](state: IUser, message: string) {
    return (state.message = message);
  }
};
