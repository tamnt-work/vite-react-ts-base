import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTE_PAGE } from "@/constants/route-page";
import { useAuth } from "@/hooks/useAuth";
import { GuardAccess } from "@/enums/guard-access";

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

export default GuardAuth;
