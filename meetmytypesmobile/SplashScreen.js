import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';


export default function SplashScreen() {

    return (
        <View style={styles.container}>
            <Image style={{width: 350, height: 350}} source= {require('./assets/loading.gif')}/>            
        </View>);
    }
    
    
const styles = StyleSheet.create({
                container: {
                flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
