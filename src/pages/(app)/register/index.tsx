import { FC } from 'react';

import { GuardAccess } from '@/enums/guard-access';
import { GuardAuth } from '@/middleware/guard-auth';

const RegisterPage: FC = () => {
  return (
    <GuardAuth type={GuardAccess.Guest}>
      <div>Register Page</div>
    </GuardAuth>
  );
};

export default RegisterPage;
