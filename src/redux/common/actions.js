import {
  MESSAGE_SHOW,
  MESSAGE_HIDE,
  MESSAGE_SHOW_DISMISSIBLE,
} from '../../constants/actions';

export const showDismissibleMessage = (message, type) => {
    return {
      type: MESSAGE_SHOW_DISMISSIBLE,
      payload: {message, type},
    }
  }
;

export const showMessage = (message, type, id) => {
  return {
    type: MESSAGE_SHOW,
    payload: {message, type, id},
  }
};

export const hideMessage = id => ({
  type: MESSAGE_HIDE,
  payload: {id},
});
