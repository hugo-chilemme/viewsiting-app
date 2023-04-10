import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import React from 'react';

import { Component } from '../../core/components'


export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    height: '100%',
    padding:20,
    paddingTop:40,
    backgroundColor: '#fff',
  });
  
  const button = {
    padding:10,
    paddingLeft: 0,
    borderRadius: 10,
  }


  
  const logout = () => {
      accounts?.active.logout(); 
      navigation.navigate('StartScreen');
  }
  return (
    <View style={container}>
      <View style={{marginBottom: 50}}>

        {   Component.Title('Préférence d\'application', 3, { marginBottom: 10, fontWeight: "bold" })   }

        <TouchableOpacity style={button} onPress={logout}>

          {   Component.Title('Se déconnecter', 5, { color: 'red' })   }
          
        </TouchableOpacity>
      </View>

     
      
      <View>

        {   Component.Title(`${accounts?.active.accountId}`, 7, { color: "#aaa" })   }
        
        {   Component.Title(`Viewsiting (C) ${new Date().getFullYear()} — V0.0.1-02042023`, 6, { color: "#707070", marginTop: 0 })   }

      </View>
      <StatusBar style="light"/>
    </View>
  );
}
