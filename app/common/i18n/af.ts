import { ILanguage } from '../interfaces/i18n/ILanguage';

export const af: ILanguage = {
  key: 'af',
  description: 'Afrikaans',
  translation: {
    AppName: 'Agora',
    AppNameUpperCase: 'AGORA',
    UserRegistrationTitle: 'Gebruiker Registratie',
    UserNameText: 'Gebruiker naam',
    UserPasswordText: 'Passwoord',
    UserPasswordConfirmText: 'Passwoord',
    UserLoginTitle: 'Gebruiker Login',
    LoginButtonText: 'Login',
    RegisterButtonText: 'Registeer',
    ForgotPasswordButtonText: 'Passwoord Vergeet',
    LanguageMenuText: "Vertaal",
    Greeting: (name: string) => `Hi ${name}`
  }
};
