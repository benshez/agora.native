import { MutationTree } from 'vuex';
import * as mutationTypes from '../../types';
import {
  ILanguage
} from '../../../interfaces/language/ILanguage';

import { IRootState } from '../../../interfaces/store/IRootState';

export const mutations: MutationTree<ILanguage> = {
  [mutationTypes.GET_LANGUAGE](state: ILanguage, lang: ILanguage) {
    Object.assign(state, lang);
  }
};
