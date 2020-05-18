import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Root } from 'native-base'
import { AuthContext } from './context'
import LoginNavigator from './LoginNavigator'
import DrawerNavigator from './DrawerNavigator';


function AuthFlow() {
  const [isLoading, setLoadingState] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: (token) => {
        setLoadingState(false);
        setUserToken(token)
      },
      signOut: () => {
        setUserToken(null)
      },

    }
  }, [])

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    console.log("Calling subscription function ")

    if (userToken === null) {
      async function getToken() {
        try {
          let token = await AsyncStorage.getItem('TOKEN')
          setUserToken(token)
        } catch (e) {
          console.log("Error getting token: ", e)
        }
      }
      getToken()
    } else {
      console.log("storing token")
      const storeToken = async () => {
        try {
          let res = await AsyncStorage.setItem('TOKEN', userToken)
          console.log("storing res: ", res)

        } catch (e) {
          console.log("Error storing token: ", e)
        }
      }
      storeToken()
    }

  }, [userToken])

  return (
    <Root>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken == null ? (<LoginNavigator />) : (<DrawerNavigator />)}
        </NavigationContainer>
      </AuthContext.Provider>
    </Root>
  )
}

export default AuthFlow;