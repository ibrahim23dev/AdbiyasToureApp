// App.js
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import AnimatedLogo from './Src/AnimatedLogo';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AnimatedLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3cfcf', // Background color to match the image
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStart: {
    position: 'absolute',
    top: 50, // Adjust as needed
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8c8c8c', // Adjust color to match the text in the image
  },
});

export default App;
