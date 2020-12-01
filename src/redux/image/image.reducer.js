import { ImageActionTypes } from './image.types';
import { INITIAL_IMAGES_DATA } from './image.data';

const INITIAL_STATE = {
	images: INITIAL_IMAGES_DATA,
	isUploading: false,
	errorMessage: undefined,
	pendingIds: [],
};

const imageReducer = (state = INITIAL_STATE, action) => {
	const newImages = [...state.images];
	const newPendingIds = [...state.pendingIds];

  switch (action.type) {
		case ImageActionTypes.UPLOAD_IMAGE_START:
      return {
        ...state,
        isUploading: true,
      };
    case ImageActionTypes.UPLOAD_IMAGE_SUCCESS:
			newImages.push(action.payload.data);
		
      return {
				...state,
				isUploading: false,
        images: newImages,
			};
		case ImageActionTypes.UPLOAD_IMAGE_FAILURE:
			return {
				...state,
				isUploading: false,
				errorMessage: action.payload,
			};
		case ImageActionTypes.DELETE_IMAGE_START:
			newPendingIds.push(action.payload.id);

			return {
				...state,
				pendingIds: newPendingIds,
			};
		case ImageActionTypes.DELETE_IMAGE_SUCCESS:
			const targetIndexInPendingIds = newPendingIds.findIndex(id => id === action.payload.id);
			newPendingIds.splice(targetIndexInPendingIds, 1);
			const targetIndexInImages = newImages.findIndex(image => image.id === action.payload.id);
			newImages.splice(targetIndexInImages, 1);

			return {
				...state,
				pendingIds: newPendingIds,
				images: newImages,
			};
		case ImageActionTypes.DELETE_IMAGE_FAILURE:
			const failedIndexInPendingIds = newPendingIds.findIndex(id => id === action.payload.id);
			newPendingIds.splice(failedIndexInPendingIds, 1);

			return {
				...state,
				pendingIds: newPendingIds,
				errorMessage: action.payload.errorMessage,
			};
    default:
      return state;
  };
};

export default imageReducer;