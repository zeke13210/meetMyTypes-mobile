import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BtnNav } from '../BtnNav';

import { NavigationContainer } from '@react-navigation/native';



export default function LoginScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Login Screen Component</Text>
            <BtnNav ScreenName="Register"/>
        </View>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
