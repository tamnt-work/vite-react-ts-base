import { FC } from "react";
import { Link } from "react-router-dom";
import AuthModel from "@/dto/auth/auth.model";
import { useAuth } from "@/hooks/useAuth";
import GuardAuth from "@/middleware/guard-auth";
import { GuardAccess } from "@/enums/guard-access";

const LoginPage: FC = () => {
  const { login } = useAuth();

  return (
    <GuardAuth type={GuardAccess.Guest}>
      <div>
        <button onClick={() => login(new AuthModel())}>Login</button>
        <Link to="/">Go to home page</Link>
      </div>
    </GuardAuth>
  );
};

export default LoginPage;
