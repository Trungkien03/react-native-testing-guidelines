import {render, RenderOptions} from '@testing-library/react-native';
import React, {JSXElementConstructor, ReactElement, ReactNode} from 'react';
import AppProvider from '../contexts/providers/AppProvider';

type CustomProviderProps = {
  children: ReactNode;
};

const AllProviders = ({children}: CustomProviderProps) => {
  return <AppProvider>{children}</AppProvider>;
};

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: RenderOptions,
) => render(ui, {wrapper: AllProviders, ...options});

// Re-export everything from @testing-library/react-native
export * from '@testing-library/react-native';

// Override render method
export {customRender as render};
