// import Vue from 'vue';
// import Vuex from 'vuex';
// import { MutationTree, ActionTree } from 'vuex';
// import { IUser, IUserPost } from '../../../interfaces/user/IUser';
// import { IUserState } from '../../../interfaces/user/IUserState';
// import { UserService } from '../../../services/user/UserService';
// import { IRootState } from '../../../interfaces/store/IRootState';
// import * as mutationTypes from '../../mutation-types';
import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';
import { AgoraConstants } from '../../../system/constants/constants';

// const actions = <ActionTree<IUser, IRootState>>{
//   getUserByUserName({ dispatch, commit }, user: IUserPost) {
//     new UserService()
//       .getUserByUserName<IUser, IRootState>(user)
//       .then(reponse => {
//         commit(mutationTypes.GET_USER, { reponse });
//         return reponse;
//       });
//   }
// };

// const state: IUser = {
//   id: null,
//   entity: null,
//   role: null,
//   enabled: false,
//   locked: false,
//   username: '',
//   usersurname: '',
//   address: '',
//   city: '',
//   state: '',
//   post_code: '',
//   phone: '',
//   email: '',
//   website: '',
//   facebook: '',
//   twitter: '',
//   logo: '',
//   abn: '',
//   token_char: '',
//   token_expiry: ''
// };

export const user = {
  namespaced: AgoraConstants.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
