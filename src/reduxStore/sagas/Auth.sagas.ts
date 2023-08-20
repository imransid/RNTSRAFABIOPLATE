import { type SagaIterator } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { TEST_CHECK } from '@/constants/Auth.constants';
import { type SagaSignInFetchType } from '@/types/Auth.types';

export const _signIn = function* ({
  payload
}: {
  type: string;
  payload: SagaSignInFetchType;
}): SagaIterator<void> {
  try {
    const tokenValue = payload.email;

    yield put({
      type: TEST_CHECK,
      payload: {
        token: tokenValue
      }
    });
  } catch (err) {
    // console.log('Error in _signIn SAGA ', err);
  }
};
