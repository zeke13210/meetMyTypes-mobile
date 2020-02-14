import Profile from '../components/Profile/ProfileScreen';
import MatchRequest from '../components/matchRequest/MatchRequestScreen';
import ConfirmedMatch from '../components/confirmedMatches/MatchScreen';
import UserList from '../components/userList/UserListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
function MainAppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="MatchRequest" component={MatchRequest} />
                <Tab.Screen name="UserList" component={UserList} />
                <Tab.Screen name="Matches" component={ConfirmedMatch} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainAppNavigator;