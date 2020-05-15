import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import MainAppNavigator from './MainAppNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import { Root } from 'native-base'
import CustomDrawer from './DrawerNavigator';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginScreen from '../components/LoginStack/Login/LoginScreen';
import RegistrationScreen from '../components/LoginStack/Register/RegistrationScreen';
import AuthConext, { AuthContext } from './context'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LoginNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
}
function AuthFlow() {
  const [isLoading, setLoadingState] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setLoadingState(false);
        setUserToken("ksjeoisjfso")
      },
      signOut: () => {
        setUserToken(null)
      }
    }
  }, [])
  /*useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    console.log("Calling subscription function ")

    AsyncStorage.getItem('TOKEN').then(data => {
      console.log("This is token: ", data)
      //navigation.navigate('Profile')
      setUserToken(data)
    }).catch(err => {
      console.log("Error recieving token: ", err)
    })
  }, [userToken, setUserToken]) */
  return (
    <Root>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken == null ?
            (<Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegistrationScreen} />
            </Stack.Navigator>) :
            (<Drawer.Navigator drawerType="slide" drawerContent={(props) => <CustomDrawer {...props} />}>
              <Drawer.Screen name="Main" component={MainAppNavigator} />
            </Drawer.Navigator>)}
          {/**/}
        </NavigationContainer>
      </AuthContext.Provider>
    </Root>

  )
}

export default AuthFlow;