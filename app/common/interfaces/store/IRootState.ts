import { IUserState } from '../user/IUserState';
import { IUser } from '../user/IUser';
import { ILanguage } from '../i18n/ILanguage';

export interface IRootState {
  user: IUser;
  language: ILanguage;
}
