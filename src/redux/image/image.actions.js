import { ImageActionTypes } from './image.types';

export const uploadImageStart = formData => ({
	type: ImageActionTypes.UPLOAD_IMAGE_START,
	payload: formData,
});

export const uploadImageSuccess = image => ({
  type: ImageActionTypes.UPLOAD_IMAGE_SUCCESS,
  payload: image,
});

export const uploadImageFailure = errorMessage => ({
  type: ImageActionTypes.UPLOAD_IMAGE_FAILURE,
  payload: errorMessage,
});

export const deleteImageStart = (id, deletehash) => ({
	type: ImageActionTypes.DELETE_IMAGE_START,
	payload: {
		id,
		deletehash,
	},
});

export const deleteImageSuccess = id => ({
  type: ImageActionTypes.DELETE_IMAGE_SUCCESS,
  payload: {
		id,
	},
});

export const deleteImageFailure = (id, errorMessage) => ({
  type: ImageActionTypes.DELETE_IMAGE_FAILURE,
  payload: {
		id,
		errorMessage,
	},
});
