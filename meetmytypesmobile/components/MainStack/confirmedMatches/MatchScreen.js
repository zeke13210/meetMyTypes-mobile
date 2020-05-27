import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class MatchScreen extends Component {
    render() {
        return (
            <Container>
                
                <Content contentContainerStyle={styles.container}>
                    <Text>Match screen Component</Text>
                </Content>
            </Container>
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