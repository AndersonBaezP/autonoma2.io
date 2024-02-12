import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native';
import { StackNavigation } from './src/navegacion/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default App;
