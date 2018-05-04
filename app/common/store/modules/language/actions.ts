import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import {
  ILanguage
} from '../../../interfaces/language/ILanguage';
import { IUserState } from '../../../interfaces/user/IUserState';
import { UserService } from '../../../services/user/UserService';
import { IRootState } from '../../../interfaces/store/IRootState';
import * as mutationTypes from '../../types';
import { state } from './state';

export const actions: ActionTree<ILanguage, IRootState> = {
  [mutationTypes.GET_LANGUAGE]({ commit }, lang: ILanguage) {
    commit(mutationTypes.GET_LANGUAGE, lang.en);
  }
};
