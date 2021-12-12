import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { LoginReducer } from './login/reducer';
import { PopupsReducer } from './popups/reducer';
import { confirmModalReducer, contentModalReducer, alertModalReducer } from "./modals/reducer";

const appReducer = combineReducers({
  auth: authReducer,
  login: LoginReducer,
  popups: PopupsReducer,
  confirmModal: confirmModalReducer,
  contentModal: contentModalReducer,
  alertModal: alertModalReducer,
});

const rootReducer = (state, action) => {
  if(action.type === 'LOGOUT_USER') {
    return appReducer(undefined, action)
  }
  return appReducer(state,action)
};

export default rootReducer;
