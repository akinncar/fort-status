import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProfileTypes } from '../ducks/profile';

import { searchProfile } from './profile';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProfileTypes.SEARCH_REQUEST, searchProfile),
  ]);
}
