import React from "react";
import LoginHeader from "./LoginHeader/LoginHeader";
import { InfoLogin } from "./InfoLogin/InfoLogin";

export const Login = (props) => {
  return (
    <div className="flex-column">
      <div className="mb-5 w-100">
        <LoginHeader />
      </div>
      <div style={{ marginTop: "100px" }}>
        <InfoLogin />
      </div>
    </div>
  );
};
