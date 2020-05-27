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
    //const routeName = "Zach"
    const routeName = route.state
        ? // Get the currently active route name in the tab navigator
        route.state.routes[route.state.index].name
        : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
        // In our case, it's "Feed" as that's the first screen inside the navigator
        route.params?.screen || 'MatchRequest';
    console.log("Route name: ", route.state)
    switch (routeName) {
        case 'MatchRequest':
             return 'Match Request';
        case 'Profile':
            return  'My profile';
        case 'UserList':
            return  'User List';
        case 'Matches':
            return 'Matches';
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
