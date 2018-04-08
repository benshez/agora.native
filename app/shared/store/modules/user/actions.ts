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
  getUserByUserName({ dispatch, commit }, user: IUserByName) {
    new UserService()
      .getUserByUserName<IUser, IRootState>(user)
      .then(reponse => {
        commit(mutationTypes.GET_USER, { reponse });
        return reponse;
      });
  },

  getUserByUserEmail({ dispatch, commit }, user: IUserByEmail) {
    new UserService().getUserByEmail<IUser, IRootState>(user).then(reponse => {
      commit(mutationTypes.GET_USER, { reponse });
      return reponse;
    });
  }
};
