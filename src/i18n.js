import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';

// Restore saved language from localStorage; default to Hindi.
// Prerender runs in Node, where localStorage and document are absent.
const savedLanguage =
  typeof localStorage !== 'undefined' ? localStorage.getItem('appLanguage') || 'hi' : 'hi';

export const i18nReady = i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    }
  });

if (typeof document !== 'undefined') {
  // Persist choice and keep <html lang="..."> in sync
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('appLanguage', lng);
    document.documentElement.lang = lng;
  });
  document.documentElement.lang = savedLanguage;
}

export default i18n;
