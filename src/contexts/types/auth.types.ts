/* eslint-disable no-unused-vars */

interface User {
  userName: string | null;
}

export enum AUTH_ACTION {
  SET_USER = 'SET_USER',
  SET_ERROR = 'SET_ERROR',
  SET_IS_AUTH = 'SET_IS_AUTH',
}

export type AuthContextType = {
  user: Partial<User> | null;
  errors: string[];
  isAuth: boolean;
};

export const initialAuthState: AuthContextType = {
  user: {userName: 'Kane Nguyen'},
  errors: [],
  isAuth: false,
};

export type SetUserAction = {
  type: AUTH_ACTION.SET_USER;
  payload: User | null;
};

export type SetErrorAction = {
  type: AUTH_ACTION.SET_ERROR;
  payload: string[];
};

export type SetIsAuthAction = {
  type: AUTH_ACTION.SET_IS_AUTH;
  payload: boolean;
};

export type AuthAction = SetUserAction | SetErrorAction | SetIsAuthAction;
