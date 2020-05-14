import Profile from '../components/MainStack/Profile/ProfileScreen';
import MatchRequest from '../components/MainStack/matchRequest/MatchRequestScreen';
import ConfirmedMatch from '../components/MainStack/confirmedMatches/MatchScreen';
import UserList from '../components/MainStack/userList/UserListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Container, Content, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import DrawExample from '../components/DrawExample';

const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name;

  return (
    <Header>
      <Right>
        <Button onPress={navigation.goBack}>
          <Icon name='md-menu' />
        </Button>
      </Right>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function MainAppNavigator() {
  return (
    <Tab.Navigator screenOptions={({navigation}) =>({
      tabBarIcon: ({focused, color, size}) => (<Icon name="alarm"/>),
      
    })} tabBarOptions={{style: {backgroundColor: '#E53765'}, labelStyle: {color: 'white'}}}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="MatchRequest" component={MatchRequest} />
      <Tab.Screen name="UserList" component={UserList} />
      <Tab.Screen name="Matches" component={ConfirmedMatch} />
    </Tab.Navigator>
  )
}

export default MainAppNavigator;