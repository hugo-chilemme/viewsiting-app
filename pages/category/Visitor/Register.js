import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title  } from '../../core/styles';
import { InputProperties, ButtonProperties } from '../../core/properties.js';
import React, { useState, useRef } from 'react';
import { Component } from '../../core/components'

let datas = {}



export default function RegisterPage({route, navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });
  datas.telephone = route.params.telephone;
  datas.authorize_token = route.params.authorize_token;
  datas.accountId = route.params.accountId;

  const submitButton = useRef(null);
  const [isValid, setIsValid] = useState(false);


  const SetFormValue = (key, value) => {
    datas[key] = value.trim();
    if (datas.telephone && datas.password)
    {

        if (datas.password.length >= 8)
        {

          return setIsValid(true);

        }
      
    }
    return setIsValid(false);
  }

  const setPasswordValue = (value) => {
    SetFormValue('password', value);
  }

  const handleSubmit = async () => {
    if(!isValid) return;

    if (datas.password < 8)
      return Alert.alert('Le mot de passe est trop court');

    setIsValid(false)
    apicall('/accounts/register', (resp) => {
      if (!resp.ok)
      {
        if (resp.NetworkError)
          navigation.navigate('NetworkError', resp.NetworkStatus);
        setIsValid(true)
        return;
      }
      accounts.add(resp.authority);
      accounts.active = accounts.users[resp.authority.accountId];
      navigation.navigate('RegisterIdentity')
    }, datas)
    
      
  }

  return (
    <View style={container}>
      <View style={{width: "100%"}}>

        {   Component.Title('Création de compte', 0, { marginBottom: 15 })   }

        {   Component.Title(`+33 ${datas.telephone}`, 3, { marginBottom: 15 })   }


        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Mot de passe (minimum 8 caractères)</Text>
          <TextInput inputMode="text" secureTextEntry={true} autoComplete="password-new"
            onChangeText={setPasswordValue}
            style={InputProperties.input}
          />
        </TouchableOpacity>



      </View>

      {   Component.Button('Suivant', handleSubmit, isValid)   }

      <StatusBar style="auto" />
    </View>
  );
}
 