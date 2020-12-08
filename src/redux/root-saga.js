import { all, call } from 'redux-saga/effects';

import { imageSagas } from './image/image.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([
    call(imageSagas),
    call(userSagas),
  ]);
};