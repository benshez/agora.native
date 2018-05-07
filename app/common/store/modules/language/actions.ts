import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import { I18nResolver } from 'i18n-ts';
import { ILanguage } from '../../../interfaces/language/ILanguage';
import { IRootState } from '../../../interfaces/store/IRootState';
import * as mutationTypes from '../../types';
import { state } from './state';
import { i18n } from '../../../language';

export const actions: ActionTree<ILanguage, IRootState> = {
  [mutationTypes.GET_LANGUAGE]({ commit }, lang: string) {
    let messages = new I18nResolver(i18n, lang).translation;
    commit(mutationTypes.GET_LANGUAGE, messages);
  },
  [mutationTypes.UPDATE_LANGUAGE]({ commit }, lang: string) {
    let messages = new I18nResolver(i18n, lang).translation;
    commit(mutationTypes.GET_LANGUAGE, messages);
  }
};
