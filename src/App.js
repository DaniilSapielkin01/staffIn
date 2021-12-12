import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import 'antd/dist/antd.css';

import { useRoutes } from "./routes";
import CustomPopup from "./components/common/Popups/customizePopup/CustomPopup";
import classes from "./App.module.scss";

const App = () => {
  let routes = useRoutes(false);
  return (
    <div className={classes.root}>
      <Container className={classes.contains}>
        <Router>{routes}</Router>
        <CustomPopup />
        {/*<ConfirmModal />*/}
        {/*<ContentModal />*/}
        {/*<AlertModal />*/}
        {/*<NotificationInfoField />*/}
      </Container>
    </div>
  );
};

export default connect(null , null)(App);
