import { Module } from 'vuex';
import { IRootState } from '../../../interfaces/store/IRootState';
import { ITranslation } from '../../../interfaces/i18n/ILanguage';
import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';
import { AgoraConfiguration } from '../../../system/constants/AgoraConfiguration';

export const language: Module<ITranslation, IRootState> = {
  namespaced: AgoraConfiguration.APP_SETTINGS.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
