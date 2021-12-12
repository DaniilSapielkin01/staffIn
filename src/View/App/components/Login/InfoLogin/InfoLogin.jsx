import React from "react";
import uuid from "react-uuid";

import classes from "./InfoLogin.module.scss";
import image from "../../../../../assets/img/image.jpg";

const baseInfoAboutSite = [
  { id: uuid(), name: "Свободно общайся со всеми", description: "" },
  { id: uuid(), name: "Расширь свою сеть" },
  { id: uuid(), name: "Сделай рекламу" },
  { id: uuid(), name: "Найди работу" },
  { id: uuid(), name: "Продай товар" },
];

// main page info with LOGIN
export const InfoLogin = (props) => {
  return (
    <div className={classes.root}>
      <div className={classes.login}>
        <div className={classes.header}>
          Добро пожаловать в профессиональное сообщество
        </div>
        <div className={classes.loginInfo}>
          <div className={classes.info}>
            {baseInfoAboutSite.map((head, index) => (
              <div key={head.id} className={classes.headerInfo}>
                <div className={classes.headerTitle}>{head.name}</div>
              </div>
            ))}
          </div>

          <div className={classes.image}>
            <img src={image} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};
