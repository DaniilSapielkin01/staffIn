import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginContainer } from "./containers/LoginContainer";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/profile" exact>
          <h3>Profile</h3>
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <LoginContainer />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
