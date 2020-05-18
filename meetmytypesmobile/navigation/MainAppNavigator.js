import Profile from '../components/MainStack/Profile/ProfileScreen';
import MatchRequest from '../components/MainStack/matchRequest/MatchRequestScreen';
import ConfirmedMatch from '../components/MainStack/confirmedMatches/MatchScreen';
import UserList from '../components/MainStack/userList/UserListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const Tab = createBottomTabNavigator();

const tabStyle = {
  //activeBackgroundColor: '#E53765',
  activeTintColor: '#E53765',
  inactiveTintColor: 'gray',
  style: {
    backgroundColor: 'white',
    
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
            Matches: 'ios-heart-empty'
          }

          color = focused ? ('#E53765') : ('gray')
          return <Icon name={iconName[route.name]} size={size} style={{color: color}} />
        },
      })}
      tabBarOptions={tabStyle}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="MatchRequest" component={MatchRequest}/>
      <Tab.Screen name="UserList" component={UserList} />
      <Tab.Screen name="Matches" component={ConfirmedMatch} />
    </Tab.Navigator>
  )
}

export default MainAppNavigator;