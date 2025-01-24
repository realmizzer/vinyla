import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from '~/shared/lib/i18next/locales/en.json';
import ruTranslation from '~/shared/lib/i18next/locales/ru.json';
import {LanguageCodes} from '~/shared/lib/i18next/types/locales.ts';
import {getLocale} from '~/shared/lib/intl/getLocale';

const DEFAULT_LNG = LanguageCodes.EN;

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const locale = getLocale();
    callback(locale || DEFAULT_LNG);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LNG,
    debug: __DEV__,
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
