import React, { Component, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Left, List, ListItem, Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';
import axios from 'axios';
import { useLinkTo } from '@react-navigation/native';

export default function UserListScreen(props) {
    const [users, setUsers] = useState();
    const linkTo = useLinkTo();
    useEffect(() => {
        const pullData = async () => {
            let response = await axios.get('https://q1jp3exnqb.execute-api.us-east-1.amazonaws.com/dev/admin/currentUsers')
            setUsers(response.data.Items)
            console.log("Users response: ", response.data.Items)
        }
        pullData()
    }, [])
    return (
        <Container>
            <Content>

                <List>
                {users.map(user => (
                        <ListItem avatar onPress={() => props.navigation.navigate('ListProfile')}>
                            <Left>
                                <Thumbnail source={require('../../../assets/empty.png')} />
                            </Left>
                            <Body>
                                <Text>{user.Nickname}</Text>
                                <Text note>{user.LoveType}</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    ))}
                </List>

            </Content>
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})