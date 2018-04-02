import axios from 'axios';
import { ActionContext, Store } from 'vuex';
import { IUser } from '../../interfaces/user/IUser';
import { IUserState } from '../../interfaces/user/IUserState';
import { IRootState } from '../../interfaces/store/IRootState';
import { AgoraConstants } from '../../system/constants/constants';

export class UserService {
  private user: IUser;

  constructor() {}

  getUserByUserName(
    context: ActionContext<IUserState, IRootState>
  ): Promise<IUser> {
    return axios.get(`${AgoraConstants.APP_API}/user/login`) as Promise<any>;
  }

  getUserByEmail(
    context: ActionContext<IUserState, IRootState>
  ): Promise<IUser> {
    return axios.get(`${AgoraConstants.APP_API}/user/login`) as Promise<any>;
  }
}
