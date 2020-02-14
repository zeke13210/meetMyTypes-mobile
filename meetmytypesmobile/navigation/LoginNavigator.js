
import RegistrationScreen from '../components/LoginStack/Register/RegistrationScreen';
import LoginScreen from '../components/LoginStack/Login/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();
function LoginNavigator() {
    return (
        <NavigationContainer initialRouteName="Login">
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginNavigator;