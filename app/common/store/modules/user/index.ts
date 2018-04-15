import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';
import { AgoraConstants } from '../../../system/constants/constants';

export const UserModule = {
  namespaced: AgoraConstants.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
