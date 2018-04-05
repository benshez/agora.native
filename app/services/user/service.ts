import axios from 'axios';
import * as http from 'tns-core-modules/http';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ActionContext, Store } from 'vuex';
import { IUser, IUserPost } from '../../interfaces/user/IUser';
import { IUserState } from '../../interfaces/user/IUserState';
import { IRootState } from '../../interfaces/store/IRootState';
import { AgoraConstants } from '../../system/constants/constants';

export class UserService {
  private user: IUser;

  constructor() {}

  getUserByUserName<IUser, IRootState>(user: IUserPost): Promise<IUser> {
    let data = {
      password: user.password,
      email: user.email
    };
    let config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: JSON.stringify(data)
    };

    // return http
    //   .request({
    //     url: `${AgoraConstants.APP_API}/user/login`,
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     content: JSON.stringify({
    //       password: user.password,
    //       email: user.email
    //     })
    //   })
    //   .then(
    //     (response: http.HttpResponse) => {
    //       let result = response.content.toJSON();
    //       // console.log(result);
    //     },
    //     e => {
    //       let x: any = '';
    //       // console.log("Error occurred " + e);
    //     }
    //   ) as Promise<any>;

    return axios
      .post(`${AgoraConstants.APP_API}/user/login`, data, config)
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch(error => {
        console.log(error);
      }) as Promise<any>;
  }

  getUserByEmail<IUser, IRootState>(user: IUserPost): Promise<IUser> {
    return axios.post(`${AgoraConstants.APP_API}/user/login`) as Promise<any>;
  }
}
