import Profile from '../components/Profile/Profile';
import MatchRequest from '../components/matchRequest/MatchRequest';
import ConfirmedMatch from '../components/confirmedMatches/ConfirmedMatch';
import UserList from '../components/userList/UserList';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
function TopNavBar() {
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

export default TopNavBar;