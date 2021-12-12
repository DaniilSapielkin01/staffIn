import { MESSAGE_SHOW, MESSAGE_HIDE } from '../../constants/actions';

const INITIAL_STATE = {
  message: [],
  open: false
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case MESSAGE_SHOW:
      return {
        ...state,
        message: [{text: payload.message, type: payload.type, id: payload.id}, ...state.message],
        open: true,
      };

    case MESSAGE_HIDE:
      return {...state, message: state.message.filter(msg => msg.id !== payload.id), open: false,};

    default:
      return {...state};
  }
};
