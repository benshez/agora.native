import { Module } from 'vuex';
import { IRootState } from '../../../interfaces/store/IRootState';
import { IUser } from '../../../interfaces/user/IUser';
import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';
import { AgoraConstants } from '../../../system/constants/constants';

export const UserModule: Module<IUser, IRootState> = {
  namespaced: AgoraConstants.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
