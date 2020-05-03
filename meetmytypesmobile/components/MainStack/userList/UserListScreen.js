import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class UserListScreen extends Component {
    render() {
        return (
            <View style= {styles.container}>
                
                <Text>user list Component</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})