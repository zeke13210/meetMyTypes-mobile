import React, { Component, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Left, List, ListItem, Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';
import axios from 'axios';

export default function ListProfileScreen({route, navigation}) {
    const [users, setUsers] = useState();
    const { name } = route.params;
    const { userId } = route.params;
    /*useEffect(() => {
        const pullData = async () => {
            let response = await axios.get('https://q1jp3exnqb.execute-api.us-east-1.amazonaws.com/dev/admin/currentUsers')
            setUsers(response.data.Items)
            console.log("Users response: ", response.data.Items)
        }
        pullData()
    }, [])*/
    return (
        <Container>
            <Header>
                <Text>{name} profile</Text>
            </Header>
            <Content>
                <Text>Link profile screen</Text>
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