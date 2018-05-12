import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import { IRoute, RouteService } from '../';
import { IRootState } from '../../base/';
import * as mutationTypes from '../../base/store/mutationTypes';

export const actions: ActionTree<Array<IRoute>, IRootState> = {
  [mutationTypes.GET_ROUTES]({ commit }, routes: string) {
    commit(mutationTypes.GET_ROUTES, new RouteService().GET_ROUTES(routes));
  },

  [mutationTypes.UPDATE_ROUTES]({ commit }, routes: Array<any>) {
    commit(mutationTypes.UPDATE_ROUTES, [
      new RouteService().GET_ROUTES(routes[0]),
      routes[1]
    ]);
  }
};
