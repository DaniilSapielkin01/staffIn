import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import { App } from "./App";

// Provider store = {store} - будет доступен во всем приложении

ReactDOM.render(
  //   <Provider>
  <App />,
  //   </Provider>
  document.getElementById("root")
);
