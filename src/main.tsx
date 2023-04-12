import '@/locales/index';
import 'virtual:windi.css';

import { Routes } from 'generouted/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>,
);
