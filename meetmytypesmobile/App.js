/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import MainAppNavigator from './navigation/MainAppNavigator';
import LoginNavigator from './navigation/LoginNavigator';
import SplashScreen from './SplashScreen';

export default class App extends Component {

  constructor(props){
    super();
    this.state= {
      isLoading: true,
      userToken: null
    }
  }
  
  render() {
    
    return (
      <LoginNavigator/>
    );
  }
}

