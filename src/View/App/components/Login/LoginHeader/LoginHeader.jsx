import React from "react";
import { Button } from "antd";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import icon from "../../../../../assets/icons/icon.png";
import classes from "./LoginHeader.module.scss";

const LoginHeader = (props) => {

  const handleLogin = () => {
  console.log("handle login_")
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.iconBox}>
          <img src={icon} alt="icon" />
        </div>
        <div className="d-flex align-items-center h-100">
          <Button className='mr-2' onClick={handleLogin}>Войти</Button>
          <Button>Присоединяйся сейчас</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () =>({});
const mapActionsToProps = () => ({});

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionsToProps),
)(LoginHeader);