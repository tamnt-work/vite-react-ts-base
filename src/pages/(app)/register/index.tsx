import { FC } from "react";
import GuardAuth from "@/middleware/guard-auth";
import { GuardAccess } from "@/enums/guard-access";

const RegisterPage: FC = () => {
  return (
    <GuardAuth type={GuardAccess.Guest}>
      <div>Register Page</div>
    </GuardAuth>
  );
};

export default RegisterPage;
