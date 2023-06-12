import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'am', // Default language

        // Define the supported languages
        supportedLngs: ['am', 'en', 'ru'],

        // Specify the path to the translation files
        backend: {
            loadPath: '/locales/{{lng}}/common.json',
        },

        // Specify the fallback language in case a translation is missing
        fallbackLng: 'am',

        // Additional i18next configuration options...
    });

export default i18n;