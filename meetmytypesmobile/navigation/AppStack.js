import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import ListProfileScreen from '../components/MainStack/userList/ListProfileScreen';
import MainAppNavigator from './MainAppNavigator';
import { Container, Content, Text, Header, Left, List, ListItem, Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';

const Stack = createStackNavigator();

function HeaderStyle(route, navigation) {
    let title;
    let state = route.state
    let index = state ? (route.state.index) : ("0")
    console.log("Index: ", index)

    const routeName = state
        ? // Get the currently active route name in the tab navigator
        (route.state.routes[index].name)
        : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
        route.params?.screen || 'MatchRequest';


    console.log("Route name: ", route.state)
    switch (routeName) {
        case 'MatchRequest':
            return 'Match Request';
        case 'Profile':
            return 'My profile';
        case 'UserList':
            return 'Match Profiles';
        case 'Matches':
            return 'Matches';
        case 'ListProfile':
            return 'User Profile'
    } 

}

export default function AppStack() {
    return (
        <Stack.Navigator initialRouteName="MainAppNavigator">
            <Stack.Screen name="MainAppNavigator"
                component={MainAppNavigator}
                options={({ route, navigation }) => ({
                    headerTitle: HeaderStyle(route, navigation),
                    headerLeft: () => (
                        <Button transparent>
                            <Icon onPress={() => navigation.toggleDrawer()} name="md-menu" />
                        </Button>
                    )
                })} />
            <Stack.Screen name="ListProfile" component={ListProfileScreen} />
        </Stack.Navigator>
    );
}
