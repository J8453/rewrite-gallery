import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  userInfo: undefined,
  albums: [],
  isCreating: false,
  pendingIds: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  const newAlbums = [...state.albums];
  const newPendingIds = [...state.pendingIds];

  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.GET_INIT_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    // TODO 404 Error
    case UserActionTypes.CREATE_ALBUM_START:
      return {
        ...state,
        isCreating: true,
      };
    case UserActionTypes.CREATE_ALBUM_SUCCESS:
      newAlbums.push(action.payload);

      return {
        ...state,
        albums: newAlbums,
        isCreating: false,
      };
    case UserActionTypes.CREATE_ALBUM_FAILURE:
      return {
        ...state,
        isCreating: false,
      };
    case UserActionTypes.DELETE_ALBUM_START:
      newPendingIds.push(action.payload);

      return {
        ...state,
        pendingIds: newPendingIds,
      };
    case UserActionTypes.DELETE_ALBUM_SUCCESS:
      const deletedIndexOfAlbums = state.albums.findIndex(album => album.id === action.payload);
      const deletedIndexOfPendingIds = state.pendingIds.findIndex(id => id === action.payload);
      newAlbums.splice(deletedIndexOfAlbums, 1);
      newPendingIds.splice(deletedIndexOfPendingIds, 1);

      return {
        ...state,
        albums: newAlbums,
        pendingIds: newPendingIds,
      };
    case UserActionTypes.DELETE_ALBUM_FAILURE:
      const failedIndexOfPendingIds = state.pendingIds.findIndex(id => id === action.payload);
      newPendingIds.splice(failedIndexOfPendingIds, 1);

      return {
        ...state,
        pendingIds: newPendingIds,
      };
    default:
      return state;
  };
};

export default userReducer;