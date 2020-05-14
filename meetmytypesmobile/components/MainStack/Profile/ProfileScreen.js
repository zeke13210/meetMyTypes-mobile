import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class ProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon onPress={()=> this.props.navigation.toggleDrawer()} name="md-menu" />
                        </Button>
                    </Left>
                </Header>
                <Content contentContainerStyle={styles.container}>
                    <Text>Profile Component</Text>

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