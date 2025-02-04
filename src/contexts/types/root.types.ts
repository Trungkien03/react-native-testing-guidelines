import {AuthAction, AuthContextType, initialAuthState} from './auth.types';

export interface RootState {
  auth: AuthContextType;
}

export const initialState: RootState = {
  auth: initialAuthState,
  // Add initial state for other reducers here
};

export type RootAction = AuthAction;
