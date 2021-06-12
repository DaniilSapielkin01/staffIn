import React from "react";

import stl from "./InfoLogin.module.css";
import image from "../../../assets/img/image.jpg";

// main page info with LOGIN
export const InfoLogin = (props) => {
  return (
    <>
      <div className={stl.login}>
        <h2>Добро пожаловать в профессиональное сообщество </h2>
        <div className={stl.loginInfo}>
          <div className={stl.info}>
            <ul>
              <li>Свободно общайся со всеми</li>
              <li>Расширь свою сеть</li>
              <li>Сделай рекламу</li>
              <li>Найди работу</li>
            </ul>
          </div>
          <div className={stl.image}>
            <img src={image} alt="iconStart" />
          </div>
        </div>
        <div>
          <ul>
            <li>sdfdfvdfgdfgd</li>
            <li>sdfdfvdfgdfgd</li>
            <li>sdfdfvdfgdfgd</li>
            <li>sdfdfvdfgdfgd</li>
            <li>sdfdfvdfgdfgd</li>
          </ul>
        </div>
      </div>
    </>
  );
};
