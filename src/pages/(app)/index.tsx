import { FC } from "react";
import { useTranslation } from "react-i18next";
import GuardAuth from "@/middleware/guard-auth";
import { GuardAccess } from "@/enums/guard-access";

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <GuardAuth type={GuardAccess.Auth}>
      <div>
        <h1>{t("Welcome to React")}</h1>
      </div>
    </GuardAuth>
  );
};

export default HomePage;
