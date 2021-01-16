import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  // all : 배열을 받아서 그 배열 안에 있는 걸 한방에 실행
  // fork : 함수를 실행
  yield all([fork(postSaga), fork(userSaga)]);
}
