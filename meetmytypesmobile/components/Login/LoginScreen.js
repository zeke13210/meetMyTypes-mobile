import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default class LoginScreen extends Component {
    render() {
        const navigation = useNavigation();
        return (
            <View style={styles.container}>
                <Text>Login Screen Component</Text>
                <Button title="To register screen" onPress={()=> navigation.navigate(RegistrationScreen)} />
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})