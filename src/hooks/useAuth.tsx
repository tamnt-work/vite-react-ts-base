import { createContext, FC, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { ROUTE_PAGE } from '@/constants/route-page';
import { AuthModel } from '@/dto/auth/auth.model';
import { authAtom } from '@/store/atom/auth';

interface AuthContext {
  user: AuthModel | null;
  login: (data: AuthModel | null) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContext>({
  user: null,
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authStore, setAuthStore] = useRecoilState(authAtom);

  const navigate = useNavigate();

  const login = (data: AuthModel | null) => {
    setAuthStore({
      ...authStore,
      user: data,
    });
    navigate(ROUTE_PAGE.HOME, { replace: true });
  };

  const logout = () => {
    setAuthStore({ user: null });
    navigate(ROUTE_PAGE.LOGIN, { replace: true });
  };

  const value = useMemo(() => ({ user: authStore.user, login, logout }), [authStore]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
