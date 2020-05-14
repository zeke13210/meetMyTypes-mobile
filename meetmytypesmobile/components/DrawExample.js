import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigator from '../navigation/MainAppNavigator'
import { Container, Content, Text, Header, Left, Body, Right, Icon, Title } from 'native-base';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function CustomDrawer({...props}){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
        <DrawerItem label="Home" 
          onPress={()=> props.navigation.navigate('Home')} 
          icon={({focused, color, size}) =>(<Icon color={color} name="ios-home"/>)} />
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator();

export default function DrawExample() {
  return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Main" component={MainAppNavigator} />
      </Drawer.Navigator>
  );
}