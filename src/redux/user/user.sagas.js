import { takeEvery, call, put, all } from 'redux-saga/effects';

import {
  loginSuccess,
	loginFailure,
	registerSuccess,
  registerFailure,
  getProfilePageDataSuccess,
  getProfilePageDataFailure,
  createAlbumSuccess,
  createAlbumFailure,
  deleteAlbumSuccess,
  deleteAlbumFailure,
} from './user.actions';

import { login, register, getUserInfo, getAlbums } from '../../service/api/user-apis';
import { addAlbum, deleteAlbum } from '../../service/api/album-apis';
import { uploadImageToImgur } from '../../service/imgur/apis';

import { UserActionTypes } from './user.types';

export function* loginAsync({payload}) {
  try {
		const { user } = yield call(
			login,
			payload,
		);
		yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  };
};

export function* loginStart() {
  yield takeEvery(
    UserActionTypes.LOGIN_START,
    loginAsync
  );
};

export function* registerAsync({payload}) {
  try {
		const { user } = yield call(
			register,
			payload,
		);
		yield put(registerSuccess(user));
  } catch (error) {
    yield put(registerFailure(error.message));
  };
};

export function* registerStart() {
  yield takeEvery(
    UserActionTypes.REGISTER_START,
    registerAsync
  );
};

export function* getProfilePageDataAsync({payload: userId}) {
  try {
		const userInfo = yield call(
			getUserInfo,
			userId,
    );
    const albums = yield call(
			getAlbums,
			userId,
		);
		yield put(getProfilePageDataSuccess({
      userInfo,
      albums,
    }));
  } catch (error) {
    yield put(getProfilePageDataFailure(error.message));
  };
};

export function* getProfilePageDataStart() {
  yield takeEvery(
    UserActionTypes.GET_INIT_DATA_START,
    getProfilePageDataAsync
  );
};

export function* createAlbumAsync({payload: data}) {
  try {
    const reqs = data.images.map(imageFile => {
      const formData = new FormData();
      formData.append('image', imageFile);
      return call(uploadImageToImgur, formData)
    });

    const ress = yield all(reqs);

    const images = ress.map(res => ({
      src: res.data.link,
      deletehash: res.data.deletehash,
    }));

    const album = yield call(
			addAlbum,
			{
        userId: data.userId,
        name: data.name,
        description: data.description,
        images,
      }
		);
		yield put(createAlbumSuccess(album));
  } catch (error) {
    yield put(createAlbumFailure(error.message));
  };
};

export function* createAlbumStart() {
  yield takeEvery(
    UserActionTypes.CREATE_ALBUM_START,
    createAlbumAsync
  );
};

export function* deleteAlbumAsync({payload: albumId}) {
  try {
    yield call(
			deleteAlbum,
			albumId,
    );

		yield put(deleteAlbumSuccess(albumId));
  } catch (error) {
    yield put(deleteAlbumFailure(error.message));
  };
};

export function* deleteAlbumStart() {
  yield takeEvery(
    UserActionTypes.DELETE_ALBUM_START,
    deleteAlbumAsync
  );
};

export function* userSagas() {
  yield all([
		call(loginStart),
    call(registerStart),
    call(getProfilePageDataStart),
    call(createAlbumStart),
    call(deleteAlbumStart),
	]);
};