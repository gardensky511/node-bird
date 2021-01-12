import { all, fork, takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

function logInAPI() {
  return axios.post("/api/login");
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI);
    yield delay(1000);
    // put은 dispatch랑 같은 느낌
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: error.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: error.response.data,
    });
  }
}

//take : 지정 액션이 실행될 때까지 기다리는 거
// takeLatest : 동시에 2개가 실행되면 마지막 거만 실행시켜줌.
// takeLatest는 이미 완료된 건 그냥 놔두고 안완료된 것 중에서 마지막 걸 실행(응답을 취소하는거지 요청을 취소하는게 아님. 그래서 서버쪽에서도 검사해줘야됨)
// throttle을 쓰면 아예 정해진 시간 동안 요청 수까지 제한할 수 있음

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  // all : 배열을 받아서 그 배열 안에 있는 걸 한방에 실행
  // fork : 함수를 실행
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}

// fork나 call로 제너레이터 함수를 실행하고, all은 그런 애들을 동시에 하게 해줌
// call도 함수를 실행할 수 있는데 fork랑은 다름
// call은 동기함수호출, fork는 비동기함수호출
