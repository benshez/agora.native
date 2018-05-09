import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import _ from 'lodash';
import { ILanguage, ILanguages } from '../../../interfaces/i18n/ILanguage';
import { IRootState } from '../../../interfaces/store/IRootState';
import * as mutationTypes from '../types';
import { state } from './state';
import { LanguageService } from '../../../services/i18n/LanguageService';
import { Z_FILTERED } from 'zlib';

export const actions: ActionTree<ILanguage, IRootState> = {
  [mutationTypes.GET_LANGUAGE]({ commit }, lang: string) {
    commit(
      mutationTypes.GET_LANGUAGE,
      new LanguageService().FILTER_LANGUAGE(lang)
    );
  },

  [mutationTypes.UPDATE_LANGUAGE]({ commit }, lang: string) {
    commit(
      mutationTypes.UPDATE_LANGUAGE,
      new LanguageService().FILTER_LANGUAGE(lang)
    );
  },

  [mutationTypes.GET_LANGUAGES](): Array<ILanguages> {
    return new LanguageService().GET_LANGUAGES();
  }
};
