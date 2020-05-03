import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginStack/Login/LoginScreen';
import RegistrationScreen from '../components/LoginStack/Register/RegistrationScreen';


const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
}

function LoginNavigator() {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
}
