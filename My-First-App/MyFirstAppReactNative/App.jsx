import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.canvas}>
      <Text style={styles.title}>Hola DDA!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#969696',
  },
});

export default App;
