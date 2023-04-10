import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import ja from './ja.json';

use(initReactI18next).init({
  resources: {
    ja: {
      translation: ja,
    },
  },
  lng: process.env.LOCALE || 'ja',
  fallbackLng: process.env.LOCALE || 'ja',
  interpolation: {
    escapeValue: false,
  },
});
