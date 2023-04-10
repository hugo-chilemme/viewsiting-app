import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Title } from '../../core/styles';
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

  const donotdisturb = {
    padding:10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00000010',
    borderRadius: 10,
    marginBottom: 25,
  }

  return (
    <View style={container}>
      <View style={{height: "35%"}}>
        <TouchableOpacity style={settings} onPress={() => navigation.navigate('Account', { animationEnabled: false })}>
            <Icon name='settings' type='feather' size={22} color="#fff" style={navbar.icon} />
        </TouchableOpacity>
        <ImageBackground style={backgroundImage} source={{uri: "https://cdn.pixabay.com/photo/2016/11/21/12/59/couch-1845270_960_720.jpg"}}> 
          <View style={{padding:20}}>
            <Title size="0" title={`Mon espace`} properties={{color:'#fff', marginBottom:10, fontSize: 32}}></Title>
            
          </View>
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
        <Title size="3" title={`Wish Home`} properties={{marginBottom: 15}}></Title>
      
        <TouchableOpacity style={wishhome} onPress={() => navigation.navigate('CreateWishHome')}>
          <Title size="5" title={`Compléter votre Wish Home`} properties={{fontWeight: "bold", color:"#000"}}></Title>
          <Title size="6" title={`Créer votre maison ou appartement parfait(e)`}></Title>
        </TouchableOpacity>
      </View>
      <View style={navbar.view}>
        
          
        <TouchableOpacity style={navbar.item}>
          <Icon name='home' type='feather' color="#1A58A2" style={navbar.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={navbar.item} onPress={() => navigation.navigate('Notification', { animationEnabled: false })}>
          <Icon name='bell' type='feather' color="#808080" style={navbar.icon} />
        </TouchableOpacity>


      </View>
      <StatusBar style="light"/>
    </View>
  );
}
