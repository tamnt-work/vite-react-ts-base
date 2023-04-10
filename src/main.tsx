// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import '@/locales/index';

import { Routes } from 'generouted/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  </React.StrictMode>,
);
