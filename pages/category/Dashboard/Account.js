import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Title} from '../../core/styles';
import React from 'react';

export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    height: '100%',
    padding:20,
    paddingTop:40,
    backgroundColor: '#fff',
  });
  const navbar =  StyleSheet.create({
    view: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 80,
      borderRadius: 50,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowColor: '#202020',
      elevation: 50,
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: 18,
      marginTop: 0
    }
  });
  const button = {
    padding:10,
    paddingLeft: 0,
    borderRadius: 10,
  }


  
  return (
    <View style={container}>
      <View style={{marginBottom: 50}}>
        <Title size="3" title={`Préférence d'application`} properties={{marginBottom: 10, fontWeight: "bold"}}></Title>
        <TouchableOpacity style={button}>
          <Title size="5" title={`Gérer les notifications`}></Title>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 50}}>
        <Title size="3" title={`Modifier mon compte`} properties={{marginBottom: 10, fontWeight: "bold"}}></Title>
        {/* <TouchableOpacity style={button}>
          <Title size="5" title={`Gérer mon compte`} ></Title>
        </TouchableOpacity> */}
        <TouchableOpacity style={button}>
          <Title size="5" title={`Modifier mon mot de passe`}></Title>
        </TouchableOpacity>
        <TouchableOpacity style={button}>
          <Title size="5" title={`Changer de numéro de téléphone `} ></Title>
        </TouchableOpacity>
        <TouchableOpacity style={button} onPress={() => { 
            accounts?.active.logout();
            navigation.navigate('StartScreen');
         }}>
          <Title size="5" title={`Se déconnecter`} properties={{color: 'red'}}></Title>
        </TouchableOpacity>
      </View>

     
      
      <View>
        <Title size="7" title={`${accounts?.active.accountId}`} properties={{color:"#aaa"}}></Title>
        <Title size="6" title={`Viewsiting (C) ${new Date().getFullYear()} — V0.0.1-02042023`} properties={{color:"#707070", marginTop:0}}></Title>
      </View>
      <StatusBar style="light"/>
    </View>
  );
}
