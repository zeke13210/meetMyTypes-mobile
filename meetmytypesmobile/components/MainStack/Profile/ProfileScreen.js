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
} from 'react-native-paper';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
    };
  }
  componentDidMount() {
    return fetch(
      'https://7oc71uxij6.execute-api.us-east-1.amazonaws.com/dev/{proxy+}',
    );
  }

  render() {
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
            <Title>Zach</Title>
            <Subheading>The confidant</Subheading>
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
          <List.Section
            style={{justifyContent: 'center', margin: 20, marginLeft: 100}}>
            <List.Subheader style={{fontSize: 24, color: 'black'}}>
              Characteristics
            </List.Subheader>
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Section>
          <List.Section
            style={{justifyContent: 'center', margin: 20, marginLeft: 100}}>
            <List.Subheader style={{fontSize: 24, color: 'black'}}>
              Top 4 Types
            </List.Subheader>
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Section>
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
