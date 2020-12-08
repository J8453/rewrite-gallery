import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const logout = () => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: undefined,
});

export const loginStart = data => ({
	type: UserActionTypes.LOGIN_START,
	payload: data,
});

export const loginSuccess = user => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = errorMessage => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: errorMessage,
});

export const registerStart = data => ({
	type: UserActionTypes.REGISTER_START,
	payload: data,
});

export const registerSuccess = user => ({
  type: UserActionTypes.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = errorMessage => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload: errorMessage,
});

export const getProfilePageDataStart = userId => ({
	type: UserActionTypes.GET_INIT_DATA_START,
	payload: userId,
});

export const getProfilePageDataSuccess = data => ({
  type: UserActionTypes.GET_INIT_DATA_SUCCESS,
  payload: data,
});

export const getProfilePageDataFailure = errorMessage => ({
  type: UserActionTypes.GET_INIT_DATA_FAILURE,
  payload: errorMessage,
});

export const createAlbumStart = data => ({
	type: UserActionTypes.CREATE_ALBUM_START,
	payload: data,
});

export const createAlbumSuccess = album => ({
  type: UserActionTypes.CREATE_ALBUM_SUCCESS,
  payload: album,
});

export const createAlbumFailure = errorMessage => ({
  type: UserActionTypes.CREATE_ALBUM_FAILURE,
  payload: errorMessage,
});

export const deleteAlbumStart = albumId => ({
	type: UserActionTypes.DELETE_ALBUM_START,
	payload: albumId,
});

export const deleteAlbumSuccess = album => ({
  type: UserActionTypes.DELETE_ALBUM_SUCCESS,
  payload: album,
});

export const deleteAlbumFailure = errorMessage => ({
  type: UserActionTypes.DELETE_ALBUM_FAILURE,
  payload: errorMessage,
});