import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin, watchLogout } from './userSaga';

export default function* rootSaga() {
  try {
    yield all([watchJoin(), watchLogin(), watchLogout()]);
  } catch (e) {
    console.error(e);
  }
}
