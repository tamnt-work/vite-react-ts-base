import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '@/components/SEO';
import { GuardAccess } from '@/enums/guard-access';
import { GuardAuth } from '@/middleware/guard-auth';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title="Home" />

      <GuardAuth type={GuardAccess.Auth}>
        <div>
          <h1>{t('Welcome to React')}</h1>
        </div>
      </GuardAuth>
    </>
  );
};

export default HomePage;
