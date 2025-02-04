import React, {useContext, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootContext} from '../contexts/providers/AppProvider';

const HomeScreen = () => {
  const {state} = useContext(RootContext);

  useEffect(() => {
    return () => {
      console.log('====================================');
      console.log('Clean Function');
      console.log('====================================');
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text testID="username">{state.auth.user?.userName}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
