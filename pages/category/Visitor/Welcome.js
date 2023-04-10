import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Component } from '../../core/components'



export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  });
  
    return (
      <View style={container}>

        {   Component.Image(require('../../../assets/icon.png'), { marginBottom: 50, width:150, height:50 })   }
        
        {   Component.Title("L'immobilier dans votre poche", 1, { marginBottom: 20 })   }

        {   Component.Title("Application N°1 dans l’immobilier", 5)   }

        {   Component.Button("Suivant", () => navigation.navigate('UserHaveAccount'))   }

        <StatusBar style="auto" />
      </View>
    );
}
