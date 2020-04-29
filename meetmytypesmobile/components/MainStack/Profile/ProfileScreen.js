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
      data: [{}],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/dev/user/1200')
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        this.setState({
          loading: false,
          data: results,
        });
      })
      .catch((error) => console.log(error));
  }

  Nested_if_Else = () => {
    return this.state.isloading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0c9" />
      </View>
    ) : this.state.data == null ? (
      <Text>
        Please give use 72 hours to review your profile and update it.
      </Text>
    ) : (
      <Text>sORRY</Text>
    );
  };

  render() {
    var message1 = (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0c9" />
      </View>
    );
    var message2 = (
      <Text>
        Please give use 72 hours to review your profile and update it.
      </Text>
    );
    const {isloading, data} = this.state;
    const info =
      isloading || data == null ? message1 : <Text> Try again later</Text>;
    const info2 = !data ? message2 : <Text> No user found</Text>;

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
            <Title></Title>
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
          {!info || info2 ? (
            <View>
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
            </View>
          ) : null}
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
