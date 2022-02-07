import React from 'react';
import { NavigationContainer } from'@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './Calculator';
import History from './History';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}