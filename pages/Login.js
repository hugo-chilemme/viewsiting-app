import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title, Button } from '../default.styles';
import { InputProperties, TitleProperties, ButtonProperties } from './core/properties.js';
import React, { useState, useRef } from 'react';


let datas = {}

function formatPhoneNumber(phoneNumber) {
  phoneNumber = phoneNumber.replace(/\s|-|\(|\)/g, '');
  if (!/^\d+$/.test(phoneNumber))
    return false;
  if (phoneNumber.length !== 9 && phoneNumber.length !== 10)
    return false;
  if (phoneNumber.length === 9)
    phoneNumber = '0' + phoneNumber;
  return phoneNumber;
}


export default function RegisterPage({route, navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });
  datas.email = route.params.email;
  datas.token = route.params.token;

  const submitButton = useRef(null);
  const [isValid, setIsValid] = useState(false);


  const SetFormValue = (key, value) => {
    datas[key] = value.trim();
    if (datas.password.length > 3 && datas.password.length < 32)
      return setIsValid(true);
    return setIsValid(false)
  }

  const setPasswordValue = (value) => {
    SetFormValue('password', value);
  }
  const isFromComplete = () => {
    return isValid ? ButtonProperties.buttonText : ButtonProperties.buttonTextDisabled;
  };
  const handleSubmit = async () => {
      if(!isValid) return;
      refreshApp()
  }
  return (
    <View style={container}>
      <View style={{width: "100%"}}>
        <Title size="1" title="Se connecter à" properties={{ marginBottom: 15 }}></Title>
        <Title size="4" title={`${datas.email}`}></Title>
        <Title size="7" title={datas.token}></Title>

        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Mot de passe</Text>
          <TextInput inputMode="text" secureTextEntry={true} autoComplete="current-password"
            onChangeText={setPasswordValue}
            style={InputProperties.input}
          />
        </TouchableOpacity>
      

        <TouchableOpacity style={ButtonProperties.buttonAbsolute} onPress={handleSubmit}>
          <Text ref={submitButton} style={isFromComplete()}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
 