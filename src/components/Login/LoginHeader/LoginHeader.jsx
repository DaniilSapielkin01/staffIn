import React from "react";
import Grid from "@material-ui/core/Grid";
import stl from "./LoginHeader.module.css";

import icon from "../../../assets/icons/icon.png";

export const LoginHeader = (props) => {
  return (
    <Grid className={stl.header} container direction="row" justify="space-between" alignItems="center">
      <div className={stl.iconBox}>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <button>Войти</button>
        <button>Присоединяйся сейчас</button>
      </div>
    </Grid>
  );
};
