import { ILanguage } from '../../../interfaces/language/ILanguage';

export const state: ILanguage = {
  en: {
    appName: 'Agora',
    appNameUpperCase: 'AGORA',
    userRegistrationTitle: 'User Registraion',
    loginButtonText: 'Login',
    registerButtonText: 'Register',
    forgotPasswordButtonText: 'Forgot Password',
    hello: 'Hi!',
    greeting: (name: string) => `Hi ${name}`
  },
  default: 'en'
};
