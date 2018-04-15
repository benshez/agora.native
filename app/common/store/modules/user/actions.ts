import { ActionTree } from 'vuex';
import {
  IUser,
  IUserByName,
  IUserByEmail
} from '../../../interfaces/user/IUser';
import { IUserState } from '../../../interfaces/user/IUserState';
import { UserService } from '../../../services/user/UserService';
import { IRootState } from '../../../interfaces/store/IRootState';
import * as mutationTypes from '../../types';

export const actions = <ActionTree<IUser, IRootState>>{
  [mutationTypes.GET_USER_BY_EMAIL]({ dispatch, commit }, user: IUserByEmail) {
    new UserService()
      .getUserByUserName(user)
      .then(reponse => {
        commit(mutationTypes.GET_USER_BY_EMAIL, { reponse });
        return reponse;
      })
      .catch(error => {
        //   console.log(error);
      }) as Promise<IUser>;
  },

  getUserByUserEmail({ dispatch, commit }, user: IUserByEmail) {
    new UserService().getUserByEmail<IUser, IRootState>(user).then(reponse => {
      commit(mutationTypes.GET_USER_BY_EMAIL, { reponse });
      return reponse;
    });
  }
};
