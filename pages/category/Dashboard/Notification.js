import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, PreviewLayout, ImageBackground } from 'react-native';
import { Title, Input, Button } from '../../../default.styles';
import React, { useState, useRef } from 'react';
import { Icon } from '@rneui/themed';
import { StackActions } from '@react-navigation/native';

export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    paddingTop:30,
    height: '100%',
    backgroundColor: '#f7f7f7',
  });
  const navbar =  StyleSheet.create({
    view: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 65,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowColor: '#202020',
      elevation: 50,
    },
    item: {
      flex: 1,
      padding:20,
      width: '33%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: 18,
      marginTop: 0
    }
  });

  const backgroundImage = {
    flex: 1,
    justifyContent: "flex-end",
    height: '100%',
    backgroundSize: 'cover',

  };

  const notify = {
    padding:15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F1F1F1'
  }

  return (
    <View style={container}>
      <View style={{padding:20}}> 
        <Title size="3" title={`Notifications`} properties={{marginBottom:5, fontWeight: "bold"}}></Title>
      </View>
      <TouchableOpacity style={notify}>
        <Title size="5" title={`Mettez à jour votre compte`} properties={{fontWeight: "bold", color:"#000"}}></Title>
        <Title size="6" title={`Des informations sont manquantes`}></Title>
      </TouchableOpacity>

      <View style={navbar.view}>
          
        <TouchableOpacity style={navbar.item} onPress={() => navigation.navigate('Home')}>
          <Icon name='home' type='feather' color="#808080" style={navbar.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={navbar.item}>
          <Icon name='bell' type='feather' color="#1A58A2" style={navbar.icon} />
        </TouchableOpacity>


      </View>
      <StatusBar style="light"/>
    </View>
  );
}
