import Profile from '../components/MainStack/Profile/ProfileScreen';
import MatchRequest from '../components/MainStack/matchRequest/MatchRequestScreen';
import ConfirmedMatch from '../components/MainStack/confirmedMatches/MatchScreen';
import UserList from '../components/MainStack/userList/UserListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import MainAppNavigator from './MainAppNavigator';
import LoginStack from './LoginNavigator'
import AsyncStorage from '@react-native-community/async-storage';


function AuthFlow({ navigation}) {
  const [isLoading, setLoadingState] = useState(true)
  const [userToken, setUserToken] = useState(null)
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    AsyncStorage.getItem('TOKEN').then(data => {
      console.log("This is token: ", data)
      //navigation.navigate('Profile')
      setUserToken(data)
    }).catch(err => {
      console.log("Error recieving token: ", err)
    })


  })
  return (
    <NavigationContainer>
      {userToken == null ? (<LoginStack />) : (<MainAppNavigator />)}
    </NavigationContainer>
  )
}

export default AuthFlow;