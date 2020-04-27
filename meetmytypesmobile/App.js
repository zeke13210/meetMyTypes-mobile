/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import MainAppNavigator from './navigation/MainAppNavigator';
import LoginNavigator from './navigation/LoginNavigator';

export default class App extends Component {
  render() {
    return <MainAppNavigator />;
  }
}
