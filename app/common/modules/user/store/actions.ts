import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import { IUser, IUserRoles, IUserByEmail, UserService } from '../';
import { IRootState } from '../../base/';
import * as mutationTypes from '../../base/store/mutationTypes';
import { state } from './state';

export const actions: ActionTree<IUser, IRootState> = {
  [mutationTypes.GET_USER_BY_EMAIL]({ commit }, user: IUserByEmail) {
    new UserService()
      .GET_USER_BY_EMAIL(user)
      .then((response: AxiosResponse) => {
        commit(mutationTypes.GET_USER_BY_EMAIL, response.data as IUser);
      })
      .catch(error => {
        const user: IUser = state;
        user.error = true;
        user.message = error.message;
        commit(mutationTypes.GET_USER_BY_EMAIL, user);
      });
  },

  [mutationTypes.ADD_USER]({ commit }, user: IUser) {
    new UserService()
      .ADD_USER(user)
      .then((response: AxiosResponse) => {
        commit(mutationTypes.ADD_USER, response.data as IUser);
      })
      .catch(error => {
        const user: IUser = state;
        user.error = true;
        user.message = error.message;
        commit(mutationTypes.ADD_USER, user);
      });
  },

  [mutationTypes.GET_ALL_USER_ROLES]() {
    new UserService()
      .GET_ALL_USER_ROLES()
      .then((response: AxiosResponse) => {
        return response.data as IUserRoles;
      })
      .catch(error => {
        const roles: IUserRoles = {
          id: null,
          role: '',
          error: true,
          message: error.message
        };
        return roles;
      });
  }
};
