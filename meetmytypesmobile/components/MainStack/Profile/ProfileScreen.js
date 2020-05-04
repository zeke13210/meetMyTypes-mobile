import React, {useState, Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Avatar,
  Button,
  Card,
  Title,
  Appbar,
  Subheading,
  List,
  ActivityIndicator,
} from 'react-native-paper';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloading: true,
      data: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://qj87hoxzmk.execute-api.us-east-1.amazonaws.com/Dev/currentUsers/1200',
    );
    const body = await response.json();
    this.setState({data: body, isloading: false});
  }

  render() {
    const {isloading, data} = this.state;

    if (isloading)
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" animating={true} />
        </View>
      );

    return (
      <React.Fragment>
        <Appbar style={styles.top}>
          <Appbar.Action
            style={{marginLeft: 200, marginRight: 20}}
            icon="logout"
            onPress={() => console.log('Pressed archive')}
          />
          <Image
            source={require('../Profile/images/meet.jpg')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
              marginLeft: 200,
            }}
          />
        </Appbar>

        <Card style={{marginTop: 2, flex: 2}}>
          <Card.Title
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="folder"
                size={100}
                style={{marginTop: 200, marginLeft: 20}}
              />
            )}
          />
          <Card.Content>
            <View
              style={{justifyContent: 'center', margin: 5, marginLeft: 220}}>
              <Title>{data.Nickname}</Title>
              <Subheading>{data.LoveType}</Subheading>
            </View>
            <Card.Actions
              style={{justifyContent: 'center', margin: 20, marginLeft: 200}}>
              <Button
                mode="contained"
                onPress={() => console.log('pressed')}
                color="red">
                Edit Profile
              </Button>
            </Card.Actions>
            <View style={styles.lineStyle} />
            {data ? (
              <View>
                <List.Section
                  style={{
                    justifyContent: 'center',
                    margin: 20,
                    marginLeft: 100,
                  }}>
                  <List.Subheader style={{fontSize: 24, color: 'black'}}>
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
                  <List.Subheader style={{fontSize: 24, color: 'black'}}>
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
      </React.Fragment>
    );
  }
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
  },
});
