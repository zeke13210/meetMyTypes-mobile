import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import MainAppNavigator from './MainAppNavigator';
import LoginStack from './LoginNavigator'
import AsyncStorage from '@react-native-community/async-storage';
import { Root } from 'native-base'
import DrawExample from '../components/DrawExample';

function AuthFlow() {
  const [isLoading, setLoadingState] = useState(true)
  const [userToken, setUserToken] = useState(null)
  useEffect(() => {
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
    <Root>
      <NavigationContainer>
        {/*{userToken == null ? (<LoginStack />) : (<MainAppNavigator />)}*/}
        <DrawExample/>

        {/**/}
      </NavigationContainer>
    </Root>

  )
}

export default AuthFlow;