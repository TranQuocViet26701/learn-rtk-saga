import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello saga');
}

export function* rootSaga() {
  yield all([helloSaga(), counterSaga()]);
}
