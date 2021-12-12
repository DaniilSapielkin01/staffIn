import {
  OPEN_CONFIRM_MODAL,
  CLOSE_CONFIRM_MODAL,
  OPEN_CONTENT_MODAL,
  CLOSE_CONTENT_MODAL,
  EDIT_CONTENT_MODAL,
  OPEN_ALERT_MODAL,
  CLOSE_ALERT_MODAL,
} from '../../constants/actions';

export const initialState = {
  open: false,
  params: {}
};

//setTimeout has been added because modal has animation,
// and need clean up params after closing modal

const cleanUpParamsWithDelay = () => {
  setTimeout(() => ({ params: {} }),0)
};

export function confirmModalReducer(state = initialState, action) {
  switch (action.type) {
    case  OPEN_CONFIRM_MODAL:
      return {
        ...state,
        open: true,
        params: action.payload,
      };
    case CLOSE_CONFIRM_MODAL:
      cleanUpParamsWithDelay()
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

export function alertModalReducer(state = initialState, action) {
  switch (action.type) {
    case  OPEN_ALERT_MODAL:
      return {
        ...state,
        open: true,
        params: action.payload,
      };
    case CLOSE_ALERT_MODAL:
      cleanUpParamsWithDelay()
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

export const initialStateContent = {
  open: false,
  headerText: "",
};

export function contentModalReducer(state = initialStateContent, action) {
  switch (action.type) {
    case  OPEN_CONTENT_MODAL:
      return {
        ...state,
        open: true,
        ...action.payload,
      };

    case CLOSE_CONTENT_MODAL:
      cleanUpParamsWithDelay()
      return {
        ...state,
        open: false,
      };

    case EDIT_CONTENT_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
