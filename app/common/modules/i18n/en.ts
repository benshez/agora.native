import { ILanguage } from './interfaces/ILanguage';

export const en: ILanguage = {
  key: 'en',
  description: 'English',
  translation: {
    AppName: 'Agora',
    AppNameUpperCase: 'AGORA',
    UserRegistrationTitle: 'User Registration',
    UserNameText: 'User name',
    UserPasswordText: 'Password',
    UserPasswordConfirmText: 'Password',
    UserLoginTitle: 'User Login',
    LoginButtonText: 'Login',
    RegisterButtonText: 'Register',
    ForgotPasswordButtonText: 'Forgot Password',
    LanguageMenuText: 'Translate',
    HomeMenuItemText: 'Home',
    AboutMenuItemText: 'About',
    LoginMenuItemText: 'Login',
    Greeting: (name: string) => `Hi ${name}`
  }
};
