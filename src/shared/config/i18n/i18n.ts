import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import it from './locales/it/translation.json';

export const resources = {
  en: {
    translation: en,
  },
  it: {
    translation: it,
  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    returnEmptyString: false,
    fallbackLng: ['it'],
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
