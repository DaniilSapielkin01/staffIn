import { combineReducers, createStore } from "redux";
// import { reducer as formReducer } from "redux-form";

import { authReducer } from "./login-reducer";

let reducers = combineReducers({
  auth: authReducer,
});

export let store = createStore(reducers);
window.__store__ = store;
