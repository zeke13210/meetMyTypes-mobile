import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BtnNav } from '../BtnNav';
import { NavigationContainer } from '@react-navigation/native';

export default function RegistrationScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Register Screen Component</Text>
            <BtnNav ScreenName="Login" />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})