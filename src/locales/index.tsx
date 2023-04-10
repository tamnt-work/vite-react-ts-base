import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import ja from './ja.json';

use(initReactI18next).init({
  resources: {
    ja: {
      translation: ja,
    },
  },
  lng: import.meta.env.VITE_LOCALE || 'ja',
  fallbackLng: import.meta.env.VITE_LOCALE || 'ja',
  interpolation: {
    escapeValue: false,
  },
});
