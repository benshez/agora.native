import { I18n } from 'i18n-ts';

export interface ITranslation {
  AppName: string;
  AppNameUpperCase: string;
  UserRegistrationTitle: string;
  UserLoginTitle: string;
  UserNameText: string;
  UserPasswordText: string;
  UserPasswordConfirmText: string;
  LoginButtonText: string;
  RegisterButtonText: string;
  ForgotPasswordButtonText: string;
  LanguageMenuText: string;
  Greeting: Function;
}

export interface ILanguage {
  key: string;
  description: string;
  translation: ITranslation;
}
