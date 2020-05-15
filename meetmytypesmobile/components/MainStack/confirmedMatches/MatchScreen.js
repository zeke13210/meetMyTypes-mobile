import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class MatchScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon onPress={() => this.props.navigation.toggleDrawer()} name="md-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.route.name}</Title>
                    </Body>
                    <Right/>
                </Header>
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