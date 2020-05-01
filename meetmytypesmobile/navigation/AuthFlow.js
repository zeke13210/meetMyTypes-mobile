import Profile from '../components/MainStack/Profile/ProfileScreen';
import MatchRequest from '../components/MainStack/matchRequest/MatchRequestScreen';
import ConfirmedMatch from '../components/MainStack/confirmedMatches/MatchScreen';
import UserList from '../components/MainStack/userList/UserListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainAppNavigator from './MainAppNavigator';
import LoginStack from './LoginNavigator'
import AsyncStorage from '@react-native-community/async-storage';

const state = {
    isLoading: true,
    userToken: null
}
function AuthFlow() {

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
    
          try {
            state.userToken = await AsyncStorage.getItem('TOKEN');
          } catch (e) {
            // Restoring token failed
          }
        }
    })
    return (
        <NavigationContainer>
            {state.userToken == null ? (<LoginStack/>): (<MainAppNavigator/>)}
        </NavigationContainer>
    )
}

export default AuthFlow;