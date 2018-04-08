import { IUser } from './IUser';

export interface IUserState {
  UserByUserName: { [username: string]: IUser };
  UserByEmail: { [email: string]: IUser };
}
