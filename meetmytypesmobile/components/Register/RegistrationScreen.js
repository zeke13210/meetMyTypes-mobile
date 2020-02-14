import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from '../Login/LoginScreen';

export default class RegistrationScreen extends Component {
    render() {
        const navigation = useNavigation();
        return (
            <View style={styles.container}>
                <Text>Register Screen Component</Text>
                <Button title="To Login screen" onPress={()=> navigation.navigate(LoginScreen)} />
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