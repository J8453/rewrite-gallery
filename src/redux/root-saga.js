import { all, call } from 'redux-saga/effects';

import { imageSagas } from './image/image.sagas';

export default function* rootSaga() {
  yield all([call(imageSagas)]);
};