import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { Translation } from 'shared/types/translation';

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

export const i18n = i18next.createInstance();

i18n.use(LanguageDetector).use(initReactI18next)
  .init(
    {
      resources,
      fallbackLng: [Translation.IT],
      lng: Translation.IT,
      returnEmptyString: false,
      debug: __IS_DEV__,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true,
      },
    },
  ).catch((error) => {
    console.error('i18n initialization failed:', error);
  });
