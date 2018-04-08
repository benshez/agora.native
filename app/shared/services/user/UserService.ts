import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ActionContext, Store } from 'vuex';
import { IUser, IUserByName, IUserByEmail } from '../../interfaces/user/IUser';
import { IUserState } from '../../interfaces/user/IUserState';
import { IRootState } from '../../interfaces/store/IRootState';
import { AgoraConstants } from '../../system/constants/constants';
import BaseService from '../BaseService';

export class UserService extends BaseService {
  private user: IUser;

  getUserByUserName<IUser, IRootState>(user: IUserByName): Promise<IUser> {
    let config: AxiosRequestConfig = {
      headers: this.getHeaders(),
      data: JSON.stringify(user)
    };

    return axios
      .post(`${AgoraConstants.APP_API}/user/login`, user, config)
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch(error => {
        console.log(error);
      }) as Promise<any>;
  }

  getUserByEmail<IUser, IRootState>(user: IUserByEmail): Promise<IUser> {
    let config: AxiosRequestConfig = {
      headers: this.getHeaders(),
      data: JSON.stringify(user)
    };

    return axios
      .post(`${AgoraConstants.APP_API}/user/login`, user, config)
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch(error => {
        console.log(error);
      }) as Promise<any>;
  }
}
