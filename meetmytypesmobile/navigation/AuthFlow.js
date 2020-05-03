import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import MainAppNavigator from './MainAppNavigator';
import LoginStack from './LoginNavigator'
import AsyncStorage from '@react-native-community/async-storage';


function AuthFlow() {
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