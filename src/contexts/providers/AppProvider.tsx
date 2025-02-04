/* eslint-disable react/react-in-jsx-scope */
import {createContext, Dispatch, ReactNode, useReducer} from 'react';
import rootReducer from '../reducers/root.reducer';
import {initialState, RootAction, RootState} from '../types/root.types';

export const RootContext = createContext<{
  state: RootState;
  dispatch: Dispatch<RootAction>;
}>({state: initialState, dispatch: () => {}});

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <RootContext.Provider value={{state, dispatch}}>
      {children}
    </RootContext.Provider>
  );
};

export default AppProvider;
