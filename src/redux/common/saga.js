import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { isEmpty } from 'lodash'

import { hideMessage, showMessage } from './actions';
import { MESSAGE_SHOW_DISMISSIBLE } from '../../constants/actions';
import { defaultTimeout } from '../../constants/defaultValues';
import { generateID } from '../../helpers/utils';

function* showDismissibleMessage({payload}) {
  if (!isEmpty(payload.message)) {
    const id = generateID();
    yield put(showMessage(payload.message, payload.type, id));
    yield delay(defaultTimeout);
    yield put(hideMessage(id));
  }
}

export function* watchShowDismissibleMessage() {
  yield takeEvery(MESSAGE_SHOW_DISMISSIBLE, showDismissibleMessage);
}

export default function* rootSaga() {
  yield all([
    fork(watchShowDismissibleMessage),
  ]);
}
