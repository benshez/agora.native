import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ActionContext, Store } from 'vuex';
import { IUser, IUserByName, IUserByEmail } from '../../interfaces/user/IUser';
import { IUserState } from '../../interfaces/user/IUserState';
import { IRootState } from '../../interfaces/store/IRootState';
import { AgoraConfiguration } from '../../system/constants/AgoraConfiguration';
import BaseService from '../BaseService';

export class UserService extends BaseService {
  private user: IUser;
  private config: AxiosRequestConfig = { headers: this.getHeaders() };

  getUserByUserName(user: IUserByEmail): Promise<any> {
    this.config.data = JSON.stringify(user);

    return axios.post(
      `${AgoraConfiguration.APP_SETTINGS.APP_ROUTES.LOGIN_ROUTE}`,
      user,
      this.config
    );
  }

  getUserByEmail<IUser, IRootState>(user: IUserByEmail): Promise<IUser> {
    let config: AxiosRequestConfig = {
      headers: this.getHeaders(),
      data: JSON.stringify(user)
    };

    return axios
      .post(
        `${AgoraConfiguration.APP_SETTINGS.APP_ROUTES.LOGIN_ROUTE}`,
        user,
        config
      )
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch(error => {
        console.log(error);
      }) as Promise<any>;
  }
}
