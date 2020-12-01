import { takeEvery, call, put, all } from 'redux-saga/effects';

import {
  uploadImageSuccess,
	uploadImageFailure,
	deleteImageSuccess,
	deleteImageFailure,
} from './image.actions';

import { uploadImageToImgur, deleteImageFromImgur } from '../../service/imgur/apis';

import { ImageActionTypes } from './image.types';

export function* uploadImageAsync({payload: formData}) {
  try {
		const image = yield call(
			uploadImageToImgur,
			formData
		);
		yield put(uploadImageSuccess(image));
  } catch (error) {
    yield put(uploadImageFailure(error.message));
  };
};

export function* uploadImageStart() {
  yield takeEvery(
    ImageActionTypes.UPLOAD_IMAGE_START,
    uploadImageAsync
  );
};

export function* deleteImageAsync({payload: {id, deletehash}}) {
  try {
		yield call(
			deleteImageFromImgur,
			deletehash
		);
		yield put(deleteImageSuccess(id));
  } catch (error) {
    yield put(deleteImageFailure(id, error.message));
  };
};

export function* deleteImageStart() {
  yield takeEvery(
    ImageActionTypes.DELETE_IMAGE_START,
    deleteImageAsync
  );
};

export function* imageSagas() {
  yield all([
		call(uploadImageStart),
		call(deleteImageStart),
	]);
};