import Vue from 'vue';
import Vuex from 'vuex';
import { MutationTree, ActionTree } from 'vuex';
import { IUser, IUserPost } from '../../../interfaces/user/IUser';
import { IUserState } from '../../../interfaces/user/IUserState';
import { UserService } from '../../../services/user/service';
import { IRootState } from '../../../interfaces/store/IRootState';

const mutations: MutationTree<IUser> = {};

const actions: ActionTree<IUser, IRootState> = {
  getUserByUserName({ dispatch, commit }, user: IUserPost) {
    new UserService()
      .getUserByUserName<IUser, IRootState>(user)
      .then(reponse => {
        return reponse;
        //commit('', { user });
      });
  }
};

const state: IUser = {
  id: null,
  entity: null,
  role: null,
  enabled: false,
  locked: false,
  username: '',
  usersurname: '',
  address: '',
  city: '',
  state: '',
  post_code: '',
  phone: '',
  email: '',
  website: '',
  facebook: '',
  twitter: '',
  logo: '',
  abn: '',
  token_char: '',
  token_expiry: ''
};

export const user = {
  namespaced: true,
  state,
  mutations,
  actions
};
