import { MutationTree } from 'vuex';
import * as mutationTypes from '../types';
import { ITranslation } from '../../../interfaces/i18n/ILanguage';

import { IRootState } from '../../../interfaces/store/IRootState';

export const mutations: MutationTree<ITranslation> = {
  [mutationTypes.GET_LANGUAGE](state: ITranslation, lang: ITranslation) {
    Object.assign(state, lang);
    return lang;
  },
  [mutationTypes.UPDATE_LANGUAGE](state: ITranslation, lang: ITranslation) {
    Object.assign(state, lang);
  }
};
