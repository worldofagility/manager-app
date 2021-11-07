import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    // yield call(api, payload)
    localStorage.setItem('access_token', 'hung-hq');
    // localStorage.setItem('access_token', payload.username);
    yield put(
      authActions.loginSuccess({
        id: '123',
        name: 'hung-hq',
        rule: {
          id: 'as',
          name: 'admin',
          rule: 1,
        },
      })
    );

    // redirect to index page
    yield put(push('/test/checklist'));
  } catch (error) {
    yield put(authActions.loginFailure(error));
  }
}

function* handleLogout() {
  try {
    yield delay(500);
    // yield call(api)
    localStorage.removeItem('access_token');
    // redirect to login page
    yield put(push('/login'));
  } catch (error) {}
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
