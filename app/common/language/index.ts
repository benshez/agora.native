import { enAU } from './en-AU';
import { af } from './af';

export const LanguageCodes = {
  'en-AU': 'English Australia',
  af: 'Afrikaans'
};

export const Languages = {
  'en-AU': enAU,
  af: af
};

export const i18n = {
  ...Languages,
  default: 'en-AU'
};
