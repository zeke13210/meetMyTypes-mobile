import Profile from '../components/MainStack/Profile/ProfileScreen';
import MatchRequest from '../components/MainStack/matchRequest/MatchRequestScreen';
import ConfirmedMatch from '../components/MainStack/confirmedMatches/MatchScreen';
import UserList from '../components/MainStack/userList/UserListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


const Tab = createBottomTabNavigator();
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
        <Left>
          <Button transparent onPress={navigation.goBack}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
    );
  };
function MainAppNavigator() {
    return (
        <Tab.Navigator initialRouteName="Login" screenOptions={{ header: header }}>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="MatchRequest" component={MatchRequest} />
            <Tab.Screen name="UserList" component={UserList} />
            <Tab.Screen name="Matches" component={ConfirmedMatch} />
        </Tab.Navigator>
    )
}

export default MainAppNavigator;