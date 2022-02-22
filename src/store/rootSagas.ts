/* eslint-disable @typescript-eslint/no-explicit-any */
import { all } from 'redux-saga/effects';

import signInSaga from './signIn/signInSagas';

export default function* rootSaga(): any {
  return yield all([signInSaga]);
}
