/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Toast, Button } from 'native-base';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import loginUser from './loginUser';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../../../navigation/context';

export default function LoginScreen({ navigation, props }) {
  const [email, onChangeEmail] = useState(null)
  const [password, onChangePassword] = useState(null)
  const [token, setToken] = useState('')
  const [verified, setVerified] = useState(false)
  const { signIn } = React.useContext(AuthContext);
  

  const storeToken = async (token) => {
    console.log("This is current token: ", token)
    try {
      await AsyncStorage.setItem('TOKEN', token)
      console.log("success storing token: ")
    } catch (e) {
      console.log("Error storing token: ", e)
    }
  }

  useEffect(() => {
    if (email !== null && password !== null) {
      //enable btn to submit
      setVerified(true)
    }
  })

  const submitForm = (email, password) => {
    loginUser(email, password).then(res => {
      if (res.data.hasOwnProperty('errorMessage')) {

        setError(res.data.errorMessage) //show error msg

      } else {

        setSuccess("Logging in") //show success msg
        setToken(res.data.token) //send token to hook
        storeToken(token) //store token to device
        signIn(res.data.token) //send token Auth component
      }
    }).catch(err => console.log("Error pulling data: ", err))
  }

  const setError = (errText) => {
    Toast.show({
      text: errText,
      buttonText: 'OK',
      position: 'top',
      type: 'danger',
      duration: 5000,
    });
  }
  
  const setSuccess = (successText) => {
    Toast.show({
      text: successText,
      buttonText: 'OK',
      position: 'top',
      type: 'success',
      duration: 2000,
    });
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor="black"
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => onChangePassword(text)}
      />
      {verified ? (<Button block success style={styles.button}
        onPress={() => submitForm(email, password) }>
        <Text
          style={styles.buttonText}>
          LOGIN
          </Text>
      </Button>) : (<Button block disabled>
        <Text
          style={styles.buttonText}>
          LOGIN
          </Text>
      </Button>)}

      <View>
        <Text
          style={styles.signUpText}
          onPress={() => navigation.navigate('Register')}>
          Don't have an account yet? Sign Up
          </Text>
      </View>
      <Image
        source={require('../../../assets/meetmytypes-logo.png')}
        style={styles.logo}
      />
    </View >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  logo: {
    marginVertical: 50,
    height: 100,
    width: 100,
  },
  inputBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#E5E5E5',
    borderColor: 'gray',
    borderRadius: 2,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#E53765',
  },
  buttonText: {
    color: 'white',
  },
  signUpText: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    color: '#E53765',
  },
});
