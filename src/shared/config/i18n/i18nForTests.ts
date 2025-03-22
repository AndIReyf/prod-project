import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Translation } from 'shared/types/translation';

i18n
  .use(initReactI18next)
  .init({
    lng: Translation.EN,
    fallbackLng: Translation.EN,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources: { en: { translations: {} } },
  });

export default i18n;
