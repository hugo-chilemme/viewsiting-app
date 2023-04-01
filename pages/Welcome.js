import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Title, Input, Button } from '../default.styles';
import React, { useState, useEffect  } from 'react';
import { ButtonProperties } from './core/properties.js';



const testNetwork = async (cb) => {
  try {
    const response = await fetch('https://www.google.com/');
    cb(response.ok)
  } catch (error) {
    console.error(error)
    cb(false)
  }
}
export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  });
  
  let isConnected = false;
  testNetwork((res) => {
    isConnected = res;
  });
    // if(!isConnected)
    // {
    //   return (<View style={container}>
    //     <Image style={{ marginBottom: 50, height:75, width:75, stroke: "#000" }} source={require('../assets/icons/NetworkError.png')} />
    //     <Title size="0" title="Vous êtes hors connexion" properties={{ marginBottom: 20 }}></Title>
    //     <Title size="4" title="Veuillez vous connecter à internet"></Title>
    //     <TouchableOpacity style={ButtonProperties.button} onPress={WelcomePage}>
    //         <Text style={ButtonProperties.buttonText}>Réessayer</Text>
    //       </TouchableOpacity>
    //     <StatusBar style="auto" />
    //   </View>);
    // }
    return (
      <View style={container}>
        <Image style={{ marginBottom: 20, height:100, width:100 }} source={require('../assets/icon.png')} />
        <Title size="1" title="L'immobilier dans votre poche" properties={{ marginBottom: 20 }}></Title>
        <Title size="5" title="Application N°1 dans l’immobilier"></Title>
        <Button title="Suivant" press="Saisissez votre adresse email" redirect={{...navigation, ...{page: "UserHaveAccount"}}}></Button>
        <StatusBar style="auto" />
      </View>
    );
}
