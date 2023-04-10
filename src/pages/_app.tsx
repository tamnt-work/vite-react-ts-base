import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthProvider } from '@/hooks/useAuth';

const App: FC = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default App;
