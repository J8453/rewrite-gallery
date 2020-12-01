import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import imageReducer from './image/image.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  image: imageReducer,
});

export default rootReducer;