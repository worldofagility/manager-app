import { fork, put } from 'redux-saga/effects';
import { dashboardActions } from './dashboardSlice';

function* loadDashboard() {
  try {
    // yield call(api, payload)
    // localStorage.setItem('access_token', payload.username);
    yield put(dashboardActions.fetchDataSuccess());
  } catch (error) {
    yield put(dashboardActions.fetchDataFailure());
  }
}

export default function* authSaga() {
  yield fork(loadDashboard);
}
