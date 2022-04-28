import { put, takeLatest } from 'redux-saga/effects';
import { userActions } from '../reducers/userReducer';
import { joinApi, loginApi, logoutApi } from '../api/userApi';

function* join(user) {
  try {
    const response = yield joinApi(user.payload);

    yield put(userActions.joinSuccess(response));
  } catch (error) {
    yield put(userActions.joinFailure(error));
  }
}

export function* watchJoin() {
  yield takeLatest(userActions.joinRequest, join);
}

function* login(user) {
  try {
    const response = yield loginApi(user.payload);

    // 서버에서 error를 받아도 error로 상태 변화하지 않음
    yield put(userActions.loginSuccess(response));
  } catch (error) {
    yield put(userActions.loginFailure(error));
  }
}
export function* watchLogin() {
  yield takeLatest(userActions.loginRequest, login);
}

function* logout() {
  try {
    const response = yield logoutApi();

    yield put(userActions.logoutSuccess(response));
  } catch (error) {
    // yield put(userActions.loginFailure(error));
  }
}
export function* watchLogout() {
  yield takeLatest(userActions.logoutRequest, logout);
}
