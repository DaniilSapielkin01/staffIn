import {
  OPEN_CONFIRM_MODAL,
  CLOSE_CONFIRM_MODAL,
  OPEN_CONTENT_MODAL,
  CLOSE_CONTENT_MODAL,
  OPEN_ALERT_MODAL,
  CLOSE_ALERT_MODAL,
} from '../../constants/actions';

export function openConfirmModal(params) {
  return {
    type: OPEN_CONFIRM_MODAL,
    payload: params,
  };
}

export function closeConfirmModal() {
  return {
    type: CLOSE_CONFIRM_MODAL,
  };
}

export function openAlertModal(params) {
  return {
    type: OPEN_ALERT_MODAL,
    payload: params,
  };
}

export function closeAlertModal() {
  return {
    type: CLOSE_ALERT_MODAL,
  };
}

export function openContentModal(params) {
  return {
    type: OPEN_CONTENT_MODAL,
    payload: params,
  };
}

export function closeContentModal() {
  return {
    type: CLOSE_CONTENT_MODAL,
  };
}