
import RegistrationScreen from '../components/Register/RegistrationScreen';
import LoginScreen from '../components/Login/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();
function LoginNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginNavigator;