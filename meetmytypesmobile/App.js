/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MainAppNavigator from './navigation/MainAppNavigator';


export default class App extends Component {
  render() {
    return (
      <MainAppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
