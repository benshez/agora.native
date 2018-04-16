import { AxiosResponse } from 'axios';
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
      .then((response: AxiosResponse) => {
        const user: IUser = response.data;
        commit(mutationTypes.GET_USER_BY_EMAIL, user);
        if (user.error) {
          commit(mutationTypes.USER_LOGIN_HAS_ERROR, user.error);
          commit(mutationTypes.USER_LOGIN_ERROR_MESSAGE, user.message);
        }
      })
      .catch(error => {
        commit(mutationTypes.USER_LOGIN_HAS_ERROR, true);
        commit(mutationTypes.USER_LOGIN_ERROR_MESSAGE, error);
      });
  },

  getUserByUserEmail({ dispatch, commit }, user: IUserByEmail) {
    new UserService().getUserByEmail<IUser, IRootState>(user).then(reponse => {
      commit(mutationTypes.GET_USER_BY_EMAIL, { reponse });
      return reponse;
    });
  }
};
