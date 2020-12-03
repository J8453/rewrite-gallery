import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const logout = () => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: undefined,
});

// TODO
export const login = () => ({
  type: 'LOGIN',
  payload: undefined,
});