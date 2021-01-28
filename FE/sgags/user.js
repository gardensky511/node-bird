import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE, FOLLOW_REQUEST, UNFOLLOW_REQUEST,
} from '../reducers/user';

function followAPI() {
  return axios.post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield delay(1000);
    // put은 dispatch랑 같은 느낌
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: FOLLOW_FAILURE,
      error: error.response.data,
    });
  }
}

function unfollowAPI() {
  return axios.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(logInAPI);
    yield delay(1000);
    // put은 dispatch랑 같은 느낌
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: error.response.data,
    });
  }
}

function logInAPI() {
  return axios.post('/api/login');
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI);
    console.log('saga login');
    yield delay(1000);
    // put은 dispatch랑 같은 느낌
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/logout');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}

// take : 지정 액션이 실행될 때까지 기다리는 거
// takeLatest : 동시에 2개가 실행되면 마지막 거만 실행시켜줌.
// takeLatest는 이미 완료된 건 그냥 놔두고 안완료된 것 중에서 마지막 걸 실행(응답을 취소하는거지 요청을 취소하는게 아님. 그래서 서버쪽에서도 검사해줘야됨)
// throttle을 쓰면 아예 정해진 시간 동안 요청 수까지 제한할 수 있음
function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
// fork나 call로 제너레이터 함수를 실행하고, all은 그런 애들을 동시에 하게 해줌
// call도 함수를 실행할 수 있는데 fork랑은 다름
// call은 동기함수호출, fork는 비동기함수호출
