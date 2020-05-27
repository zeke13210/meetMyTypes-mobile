import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './UserListScreen';
import ListProfileScreen from './ListProfileScreen';

const Stack = createStackNavigator();


export default function UserListStack(props) {
    return (
        <Stack.Navigator initialRouteName="UserList">
            <Stack.Screen name="UserList" component={UserListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ListProfile"
                component={ListProfileScreen}
                options={{
                    headerTitle: 'List'
                    
                }} />
        </Stack.Navigator>
    );
}
