import _ from 'lodash';
import { IRoute } from '../../interfaces/routes/IRoute';

export class RouteService {
  public GET_ROUTES(routes): IRoute {
    return this.FILTER_ROUTES(routes);
  }

  public FILTER_ROUTES(routes): IRoute {
    return _.filter(routes, function(o) {
      return o.path !== '*' && o.path !== '/';
    });
  }

  public TRANSLATE_FILTERED_ROUTES(routes, state): IRoute {
    let route: IRoute = this.FILTER_ROUTES(routes);

    return _.filter(route, function(o) {
      o.meta.description = state.language[o.meta.translationKey];
      return o.path !== '*' && o.path !== '/';
    });
  }
}
