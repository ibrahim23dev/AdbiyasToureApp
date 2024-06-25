// src/AnimatedLogo.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, TextStyle } from 'react-native';

const AnimatedLogo = () => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false, // Set to false to allow color animation
    }).start();
  }, [fadeAnim]);

  const colorInterpolation = fadeAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['red', 'blue', 'green']
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.logoText,
          {
            color: colorInterpolation,
          },
        ]}
      >
        AdbiyasToure
      </Animated.Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Get Started!')}>
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333', // Dark color for professional look
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30, // 30% of button height (approximation)
    width: '80%', // Adjust as needed for your design
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AnimatedLogo;
