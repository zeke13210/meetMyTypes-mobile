import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function RegistrationScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Register Screen Component</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})