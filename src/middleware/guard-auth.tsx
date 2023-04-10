import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTE_PAGE } from '@/constants/route-page';
import { GuardAccess } from '@/enums/guard-access';
import { useAuth } from '@/hooks/useAuth';

interface Props {
  children: React.ReactNode;
  type?: GuardAccess;
}

export const GuardAuth: FC<Props> = ({ children, type }) => {
  const { user } = useAuth();

  if (type === GuardAccess.Guest && !!user) {
    return <Navigate to={ROUTE_PAGE.HOME} replace />;
  }

  if (type === GuardAccess.Auth && !user) {
    return <Navigate to={ROUTE_PAGE.LOGIN} replace />;
  }

  return <>{children}</>;
};
