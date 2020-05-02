import React, {useState, Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
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

    // if (isloading)
    //   return (
    //     <View style={styles.loader}>
    //       <ActivityIndicator size="large" color="#0c9" />
    //     </View>
    //   );

    return (
      <Card style={{marginTop: 175}}>
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
          <View style={{justifyContent: 'center', margin: 5, marginLeft: 220}}>
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
                style={{justifyContent: 'center', margin: 20, marginLeft: 100}}>
                <List.Subheader style={{fontSize: 24, color: 'black'}}>
                  Characteristics
                </List.Subheader>
                <Text>{data.Characteristics}</Text>
              </List.Section>
              <List.Section
                style={{justifyContent: 'center', margin: 20, marginLeft: 100}}>
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
    );
  }
}

const styles = StyleSheet.create({
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },
});
