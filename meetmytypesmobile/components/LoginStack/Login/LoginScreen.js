import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';



export default function LoginScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Login Screen Component</Text>
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate('Register')}/>
        </View>);
    }
    
    
const styles = StyleSheet.create({
                container: {
                flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
