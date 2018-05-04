import { IUserState } from '../user/IUserState';
import { IUser } from '../user/IUser';
import { ILanguage } from '../language/ILanguage';

export interface IRootState {
  user: IUser;
  language: ILanguage;
}
