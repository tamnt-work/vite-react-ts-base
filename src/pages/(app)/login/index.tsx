import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthModel } from '@/app/auth/auth.model';
import SEO from '@/components/SEO';
import { GuardAccess } from '@/enums/guard-access';
import { useAuth } from '@/hooks/useAuth';
import { GuardAuth } from '@/middleware/guard-auth';

const LoginPage: FC = () => {
  const { login } = useAuth();

  return (
    <>
      <SEO title="Login" />
      <GuardAuth type={GuardAccess.Guest}>
        <div>
          <button onClick={() => login(new AuthModel())}>Login</button>
          <Link to="/">Go to home page</Link>
        </div>
      </GuardAuth>
    </>
  );
};

export default LoginPage;
