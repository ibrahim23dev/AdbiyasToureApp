// src/navigation/StackNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedLogo from '../AnimatedLogo';
import MainPage from '../MainPage'; // Make sure you create this component

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimatedLogo">
        <Stack.Screen name="AnimatedLogo" component={AnimatedLogo} options={{ headerShown: false }} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
