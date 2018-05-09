import _ from 'lodash';
import { ILanguages } from '../../interfaces/i18n/ILanguage';
import { en } from '../../i18n/en';
import { af } from '../../i18n/af';

export class LanguageService {
  public GET_LANGUAGES(): Array<ILanguages> {
    let langs: Array<ILanguages> = [
      {
        key: 'en',
        description: 'English',
        translations: en
      },
      {
        key: 'af',
        description: 'Afrikaans',
        translations: af
      }
    ];
    return langs;
  }

  public GET_DEFAULT_LANGUAGE(): string {
    return 'en';
  }

  public FILTER_LANGUAGE(lang): ILanguages {
    let translation = _.find(this.GET_LANGUAGES(), function(o) {
      return o.key === lang ? o : null;
    });

    return translation.translations;
  }
}
