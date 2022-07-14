import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting for 1s');

  yield call(delay, 1000);

  console.log('Waiting done, dispatch action');

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
