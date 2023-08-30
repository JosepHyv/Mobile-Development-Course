import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Formulario from './src/components/Formulario';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formulario />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
