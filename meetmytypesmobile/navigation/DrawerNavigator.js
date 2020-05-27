import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigator from './MainAppNavigator'
import { Container, Content, Text, Header, Left, Body, Right, Icon, Title } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './context';
import AppStack from './AppStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { signOut } = React.useContext(AuthContext);

  async function logOut() {
    try {
      signOut() //call function from AuthFlow
      await AsyncStorage.removeItem('TOKEN')
      console.log("Success removing token from storage")
    } catch (e) {
      console.log("Error removing token: ", e)
    }

  }
  function CustomDrawer({ ...props }) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Lougout"
          onPress={() => logOut()}
          icon={({ focused, color, size }) => (<Icon color={color} name="ios-log-out" />)} />
      </DrawerContentScrollView>
    )
  }

  return (
    <Drawer.Navigator drawerType="slide" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Main" component={AppStack} />
    </Drawer.Navigator>
  );
} 