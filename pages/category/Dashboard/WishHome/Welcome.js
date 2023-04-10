import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { Title } from '../../../core/styles';
import { InputProperties, ButtonProperties } from '../../../core/properties.js';
import React from 'react';
import { Icon } from '@rneui/themed';


export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
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

  const wishhome = {
    padding:15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00000010',
    borderRadius: 10,
  }

  const quit = {
    position: 'absolute',
    top:0,
    left:0,
    margin:25,
    marginLeft: 5,
    padding:25,
    zIndex: 1
  }
  return (
    <View style={container}>
      <TouchableOpacity style={quit} onPress={() => navigation.navigate('Home')}>
            <Icon name='x' type='feather' size={22} color="#fff" style={navbar.icon} />
        </TouchableOpacity>
      <View style={{height: "50%"}}>

        <ImageBackground style={backgroundImage} source={{uri: "https://cdn.pixabay.com/photo/2015/07/27/17/14/mountains-862870_960_720.jpg"}}> 
        </ImageBackground>
      </View>
      <View style={{padding: 20}}>
      {/* <TouchableOpacity style={donotdisturb}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{width: 60}}>
            <Icon name='moon' type='feather' color="#1A58A2" style={navbar.icon} />
          </View>
          <View>
            <Title size="5" title={`Mode ne pas déranger`} properties={{fontWeight: "bold", color:"#000"}}></Title>
            <Title size="6" title={`Les notifications sont désactivé`}></Title>
          </View>
        </View>
      </TouchableOpacity> */}
        <Title size="0" properties={{marginTop: 25, textAlign: 'center'}} title={`Créer mon Wish Home`}></Title>
        <Title size="5" properties={{marginTop: 25, textAlign: 'center'}} title="Concevez la maison de vos rêves en personnalisant les accessoires dans chaque pièce, en ajoutant des chambres, un salon, et bien plus encore."></Title>
        <Title size="6" properties={{marginTop: 50, textAlign: 'center'}} title="Durée"></Title>
        <Title size="4" properties={{marginTop: 0, textAlign: 'center'}} title="3 à 15 mns"></Title>
      </View>
      <TouchableOpacity style={{...ButtonProperties.button, padding: 20, paddingBottom: 9}} onPress={() => navigation.navigate('WishHome_Deplacement')}>
          <Text style={ButtonProperties.buttonText}>Commencer</Text>
        </TouchableOpacity>
      <StatusBar style="light"/>
    </View>
  );
}
