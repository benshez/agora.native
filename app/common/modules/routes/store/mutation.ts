import { MutationTree } from 'vuex';
import _ from 'lodash';
import * as mutationTypes from '../../base/store/mutationTypes';
import { IRoute } from '../';
import { IRootState } from '../../base/';

export const mutations: MutationTree<Array<IRoute>> = {
  [mutationTypes.GET_ROUTES](state: Array<IRoute>, lang: IRoute) {
    Object.assign(state, lang);
    return lang;
  },
  [mutationTypes.UPDATE_ROUTES](state: Array<IRoute>, lang: any) {
    //Object.assign(state, lang[1].routes);
    let s: Array<IRoute> = state;
    let x: Array<IRoute> = _.each(s, function(value, key) {
      _.update(value, 'meta.description', function(n) {
        let c;
        return lang[1].language[value.meta.translationKey];
      });

      // state[key].meta.description =
      //   lang[1].language[state[key].meta.translationKey];
      // console.log(value, key);
    });

    debugger;
    Object.assign(state, x);

    return state;
    //state.meta.description = state.language[o.meta.translationKey];
    //return lang;
  }
};
