import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";

import { useRoutes } from "./routes";
import "./App.css";

export const App = () => {
  let routes = useRoutes(false);
  return (
    <div className="App">
      <Container maxWidth="md">
        <Router>{routes}</Router>
      </Container>
    </div>
  );
};
