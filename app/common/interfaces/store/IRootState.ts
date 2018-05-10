import { IUserState } from '~common/interfaces/user/IUserState';
import { IUser } from '~common/interfaces/user/IUser';
import { ILanguage } from '~common/interfaces/i18n/ILanguage';
import { IRoute } from '~common/interfaces/routes/IRoute';

export interface IRootState {
  user: IUser;
  language: ILanguage;
  routes: IRoute;
}
