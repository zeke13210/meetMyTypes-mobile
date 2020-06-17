import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, Text, Header, Left, List, ListItem, Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';
import axios from 'axios';

export default function ListProfileScreen({ route, navigation }) {
    const [users, setUsers] = useState();
    const { name, userId, loveType, Top4LoveTypes, Description, email } = route.params;
    const LoveTypeList = Top4LoveTypes.split(',') //convert into list
    console.log("Top 4 love types: ", LoveTypeList)
    function addMatch(){
        let response = await axios.post('https://q1jp3exnqb.execute-api.us-east-1.amazonaws.com/dev/match/add', 
        {
            sentFromEmail: "zfarley94@gmail.com",
            sentToEmail: "test@gmail.com",
            sentToUserId: "112223344556677",
            userId: `${userId}`
        })
    }
    return (
        <Container>
            <Grid>
                <Row size={1.25} style={styles.profileHeaderStyle}>
                    <Thumbnail large source={require('../../../assets/empty.png')} />
                    <Text>{name}</Text>
                    <Text>The {loveType}</Text>
                    <Button style={{backgroundColor: '#E53765'}} onPress={addMatch()}>
                        <Text>Request Match</Text>
                    </Button>
                </Row>
                <View style={styles.lineStyle} />
                <Row size={2.75} style={styles.profileContentStyle}>
                    <View style={{ flexDirection: 'row' }}>
                        {LoveTypeList.map((userLoveType, key) => (
                            <Text key= {key} style={styles.top4LoveTypesStyle}>{userLoveType}</Text>
                        ))}
                    </View>
                    <View>
                        <Text>{Description}</Text>
                    </View>
                </Row>
            </Grid>
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lineStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 3,
    },
    profileHeaderStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    profileContentStyle: {
        display: 'flex',
        //alignItems: 'center',
        //justifyContent: 'space-around',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    top4LoveTypesStyle: {
        borderColor: 'black',
        flexDirection: 'row',
        borderWidth: 4,
        padding: 5,
        flex: 3
    }
})