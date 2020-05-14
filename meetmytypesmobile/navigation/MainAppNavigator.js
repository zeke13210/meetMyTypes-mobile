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
const MyTabIcons =({focused, size, color}) => {
  let iconName;

  if (route.name === 'Profile') {
    iconName = props.focused
      ? 'ios-information-circle'
      : 'ios-information-circle-outline';
  } else if (route.name === 'UserList') {
    iconName = props.focused ? 'ios-list-box' : 'ios-list';
  }

  // You can return any component that you like here!
  return <Icon name={iconName} size={props.size} color={props.color} />
}
const tabStyle = {
  activeBackgroundColor: 'white',
  activeTintColor: 'black',
  inactiveTintColor: 'white',
  style: {
    backgroundColor: '#E53765',
    
  },
  labelStyle: {
    fontSize: 15
  }
}
function MainAppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route }) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName = {
            Profile: 'ios-person',
            MatchRequest : 'ios-contacts',
            UserList: 'ios-people',
            Matches: 'ios-heart'
          }
         /* if (route.name === 'Profile') {
            iconName = focused ? 'ios-information-circle': 'ios-information-circle-outline';
          }else if (route.name === 'MatchRequest') {
            iconName = focused ? 'ios-person' : 'ios-person-add';
          } else if (route.name === 'UserList') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }else if (route.name === 'Matches') {
            iconName = focused ? 'ios-people' : 'ios-people';
          } */
        
          // You can return any component that you like here!
          return <Icon name={iconName[route.name]} size={size} color={color} />
        },
      })}
      tabBarOptions={tabStyle}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="MatchRequest" component={MatchRequest} />
      <Tab.Screen name="UserList" component={UserList} />
      <Tab.Screen name="Matches" component={ConfirmedMatch} />
    </Tab.Navigator>
  )
}

export default MainAppNavigator;