import { Routes } from 'generouted/react-router';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <RecoilRoot>
          <Routes />
        </RecoilRoot>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
