import { Module } from 'vuex';
import { IRootState } from '../../../interfaces/store/IRootState';
import { ILanguage } from '../../../interfaces/language/ILanguage';
import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';
import { AgoraConfiguration } from '../../../system/constants/AgoraConfiguration';

export const lang: Module<ILanguage, IRootState> = {
  namespaced: AgoraConfiguration.APP_SETTINGS.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
