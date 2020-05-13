import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginScreen from '../components/LoginStack/Login/LoginScreen';
import RegistrationScreen from '../components/LoginStack/Register/RegistrationScreen';
import { Container, Content, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


const Stack = createStackNavigator();


export default function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} headerTitle="Test" />
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
