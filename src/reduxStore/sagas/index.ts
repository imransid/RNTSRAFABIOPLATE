import { type SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import { SIGN_IN_REQUEST } from '@/constants/Auth.constants';

import { _signIn } from './Auth.sagas';

const rootSaga = function* (): SagaIterator<void> {
  yield takeEvery(SIGN_IN_REQUEST, _signIn);
};

export default rootSaga;
