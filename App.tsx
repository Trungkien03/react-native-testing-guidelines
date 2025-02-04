import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import AppProvider from './src/contexts/providers/AppProvider';
import HomeScreen from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
    </AppProvider>
  );
}

export default App;
