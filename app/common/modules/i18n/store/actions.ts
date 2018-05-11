import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import _ from 'lodash';
import { ILanguage, ITranslation } from '../interfaces/ILanguage';
import { IRootState } from '../../base/interfaces/IRootState';
import * as mutationTypes from '../../base/store/mutationTypes';
import { LanguageService } from '../services/LanguageService';

export const actions: ActionTree<ITranslation, IRootState> = {
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

  [mutationTypes.GET_LANGUAGES](): Array<ILanguage> {
    return new LanguageService().GET_LANGUAGES();
  }
};
