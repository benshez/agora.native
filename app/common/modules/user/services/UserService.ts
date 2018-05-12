import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ActionContext, Store } from 'vuex';
import { IUser, IUserByEmail } from '../';
import { IRootState } from '../../base';
import { AgoraConfiguration } from '../../core/constants/AgoraConfiguration';
import { BaseService } from '../../base/';

export class UserService extends BaseService {
  private user: IUser;
  private config: AxiosRequestConfig = { headers: super.getHeaders() };

  constructor() {
    super();
  }

  GET_USER_BY_EMAIL(user: IUserByEmail): Promise<any> {
    this.config.data = JSON.stringify(user);

    return axios.post(
      `${AgoraConfiguration.APP_SETTINGS.APP_ROUTES.LOGIN_ROUTE}`,
      user,
      this.config
    );
  }

  ADD_USER(user: IUser): Promise<any> {
    this.config.data = JSON.stringify(user);

    return axios.post(
      `${AgoraConfiguration.APP_SETTINGS.APP_ROUTES.ADD_USER_ROUTE}`,
      user,
      this.config
    );
  }
}
