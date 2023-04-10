import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';

import { Component } from '../../core/components'


export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    paddingTop:30,
    height: '100%',
    backgroundColor: '#f7f7f7',
  });

  return (
    <View style={container}>
      <View style={{padding:20}}> 
        
        {   Component.Title('Notifications', 3, { marginBottom:15, fontWeight: "bold" })   }

        {   Component.Title('Votre centre de notification est vide', 6, { marginBottom: 5 })   }

      </View>

      {    Component.Module.Navbar(navigation, 'notification')    }

      <StatusBar style="light"/>
    </View>
  );
}
