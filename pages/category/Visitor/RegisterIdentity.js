import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title } from '../../core/styles';
import { InputProperties, ButtonProperties } from '../../core/properties.js';
import React, { useState, useRef } from 'react';

import { Component } from '../../core/components'
let datas = {}



export default function RegisterIdentity({route, navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const submitButton = useRef(null);
  const [isValid, setIsValid] = useState(false);


  const SetFormValue = (key, value) => {
    datas[key] = value.trim();
    if (datas.prenom && datas.nom)
    {

        if (datas.prenom.length > 2 && datas.nom.length > 2)
        {

          return setIsValid(true);

        }
      
    }
    return setIsValid(false);
  }

  const setPrenomValue = (value) => {
    SetFormValue('prenom', value);
  }

  const setNomValue = (value) => {
    SetFormValue('nom', value);
  }

  const handleSubmit = async () => {
    if(!isValid) return;
    
    if (datas.prenom.length < 2 || datas.nom.length < 2)
      return Alert.alert('Veuillez renseigné des champs plus long');


    setIsValid(false)
    apicall('/accounts/setProfil', (resp) => {
      console.log(resp)
      if (!resp.ok)
      {
        if (resp.NetworkError)
          navigation.navigate('NetworkError', resp.NetworkStatus);
        setIsValid(true)
        return;
      }
      if (!resp.message.setProfil) 
      {
        setIsValid(true)
        return;
      }
     
  
      navigation.reset({ index: 0, routes: [{ name: 'StartScreen' }] });

    }, datas)
      
  }

  return (
    <View style={container}>
      <View style={{width: "100%"}}>

        {   Component.Title('Parler un peu de vous', 0, {marginBottom: 15})   }

        {   Component.Title('Merci de renseigner les champs situés ci-dessous.', 5)    }

        <TouchableOpacity style={InputProperties.element}>
            <Text style={InputProperties.label}>Nom</Text>
            <TextInput inputMode="text" autoComplete="name-family"
              onChangeText={setNomValue}  style={InputProperties.input}/>
        </TouchableOpacity>

        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Prénom</Text>
          <TextInput inputMode="text" autoComplete="name-given"
            onChangeText={setPrenomValue} style={InputProperties.input} />
        </TouchableOpacity>

      </View>

      {   Component.Button('Suivant', handleSubmit, isValid)   }

      <StatusBar style="auto" />
    </View>
  );
}
 