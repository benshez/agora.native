import { I18n } from 'i18n-ts';

export interface IMessages {
  AppName: string;
  AppNameUpperCase: string;
  UserRegistrationTitle: string;
  UserLoginTitle: string;
  LoginButtonText: string;
  RegisterButtonText: string;
  ForgotPasswordButtonText: string;
  Greeting: Function;
}

export interface ILanguage {
  'en-AU': IMessages;
  af: IMessages;
}
