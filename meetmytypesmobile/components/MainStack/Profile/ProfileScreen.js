import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import { Container, Content, Text, Header, Left, Icon, Body, Right, Title } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage'
import {
  Avatar,
  Button,
  Card,
  Subheading,
  List,
  ActivityIndicator,
} from 'react-native-paper';
import { AuthContext } from '../../../navigation/context';


export default function ProfileScreen({ navigation, props }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const { storeProfile } = React.useContext(AuthContext);
  storeProfile(data)

  useEffect(() => {
    async function getProfile() {
      let token = await AsyncStorage.getItem('TOKEN')
      console.log("Token: ", token)
      const response = await axios.get(`https://q1jp3exnqb.execute-api.us-east-1.amazonaws.com/dev/user/profile/${token}`)
      setLoading(false)
      setData(response.data.data)
    }
  }, [])
  



  if (isLoading)
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0c9" animating={true} />
      </View>
    );

  return (
    <Container>

      <Content>

        <Card style={{ marginTop: 2, flex: 2 }}>
          <Card.Title
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="folder"
                size={100}
                style={{ marginTop: 200, marginLeft: 20 }}
              />
            )}
          />
          <Card.Content>
            <View style={{ justifyContent: 'center', margin: 5, marginLeft: 220 }}>
              <Title>{data.Nickname}</Title>
              <Subheading>{data.LoveType}</Subheading>
            </View>
            <Card.Actions
              style={{ justifyContent: 'center', margin: 20, marginLeft: 200 }}>

            </Card.Actions>
            <View style={styles.lineStyle} />
            {data.Top4LoveTypes ? (
              <View>
                <List.Section
                  style={{
                    justifyContent: 'center',
                    margin: 20,
                    marginLeft: 100,
                  }}>
                  <List.Subheader style={{ fontSize: 24, color: 'black' }}>
                    Characteristics
                  </List.Subheader>
                  <Text>{data.Characteristics}</Text>
                </List.Section>
                <List.Section
                  style={{
                    justifyContent: 'center',
                    margin: 20,
                    marginLeft: 100,
                  }}>
                  <List.Subheader style={{ fontSize: 24, color: 'black' }}>
                    Top 4 Types
                  </List.Subheader>

                  <Text>{data.Top4LoveTypes}</Text>
                </List.Section>
              </View>
            ) : (
                <Text>
                  Please give us 72 hours to review your profile and update it.
                  Thanks for you patience !!
                </Text>
              )}
          </Card.Content>
        </Card>
      </Content>

    </Container>
  );
}


const styles = StyleSheet.create({
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },
  top: {
    flexDirection: 'row-reverse',
    marginTop: 40,
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: 'red',
  },
  loader: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});