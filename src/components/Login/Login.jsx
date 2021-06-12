import React from "react";

import { LoginHeader } from "./LoginHeader/LoginHeader";
import { InfoLogin } from "./InfoLogin/InfoLogin";

export const Login = (props) => {
  return (
    <div>
      <LoginHeader />
      <InfoLogin />
    </div>
  );
};
