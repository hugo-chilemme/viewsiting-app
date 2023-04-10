import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { Component } from '../../core/components'

export default function WelcomePage({navigation}) {

  const container = StyleSheet.create({
    flex: 1,
    height: '100%',
    backgroundColor: '#f7f7f7',
  });

  const backgroundImage = {
    flex: 1,
    justifyContent: "flex-end",
    height: '100%',
    backgroundSize: 'cover',

  };
  const settings = {
    position: 'absolute',
    top:0,
    right:0,
    margin:25,
    marginRight: 5,
    padding:25,
    zIndex: 1
  }
  const wishhome = {
    padding:15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00000010',
    borderRadius: 10,
  }


  return (
    <View style={container}>
      <View style={{height: "35%"}}>
        <ImageBackground style={backgroundImage} source={{uri: "https://cdn.pixabay.com/photo/2016/11/21/12/59/couch-1845270_960_720.jpg"}}> 
          <View style={{padding:20}}>
            
            {   Component.Title('Mon espace', 0, { color: '#fff' })   }
          
          </View>
        </ImageBackground>
      </View>
      <View style={{padding: 20}}>

        {   Component.Title('Wish Home', 3, { marginBottom: 15 })   }
      
        <TouchableOpacity style={wishhome} onPress={() => navigation.navigate('CreateWishHome')}>
          
          {   Component.Title('Compléter votre Wish Home', 5, { fontWeight: "bold", color: '#000'})   }
          
          {   Component.Title('Créer votre maison ou appartement parfait(e)', 6)   }
        
        </TouchableOpacity>

      </View>
      
      {    Component.Module.Navbar(navigation, 'home')    }

      <StatusBar style="light"/>
    </View>
  );
}
