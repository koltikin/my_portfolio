// i18nConfig.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the language detector

import enCommon from './locales/en/enCommon.json'
import enHeader from './locales/en/enHeader.json'
import enHero from './locales/en/enHero.json'

import trCommon from './locales/tr/trCommon.json'
import trHeader from './locales/tr/trHeader.json'
import trHero from './locales/tr/trHero.json'

const resources = {
    en: {
        common: enCommon,
        header: enHeader,
        hero: enHero,

    },
    tr: {
        common: trCommon,
        header: trHeader,
        hero: trHero,
    },
};

i18n
    .use(LanguageDetector) // Use the language detector
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en', // Set fallback language to English
        detection: {
            order: ['localStorage', 'navigator'], // Check localStorage first, then the browser language
            lookupLocalStorage: 'i18nextLng', // Specify the key for localStorage
            caches: ['localStorage'], // Cache the detected language in localStorage
        },
        interpolation: { escapeValue: false },
    });

export default i18n;
