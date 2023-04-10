import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title } from '../../core/styles';
import { InputProperties, ButtonProperties } from '../../core/properties.js';
import React, { useState, useRef } from 'react';

import { Component } from '../../core/components'


let inputTelephoneValue;

export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });

  
  


  const inputEmail = useRef(null);
  const [isValid, setIsValid] = useState(false);

  
  const handlePress = () => {
    if (inputEmail.current) {
      inputEmail.current.focus();
    }
  };

  function isValidPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\s|-|\(|\)/g, '');
    if (!/^\d+$/.test(phoneNumber)) {
      return false;
    }
    if (phoneNumber[0] == '0' && phoneNumber.length !== 10)
      return false;

    if (phoneNumber[0] != '0' && phoneNumber.length !== 9)
      return false; 

    return true;
  }
  

  const handleTelephoneChange = (text) => {
    const isValid = isValidPhoneNumber(text)
    inputTelephoneValue = text.slice(0);
    setIsValid(isValid);
  };
  
  
  const handleSubmit = async () => {
    if(!isValid || !inputTelephoneValue) return;
    inputTelephoneValue = inputTelephoneValue.length == 10 ? inputTelephoneValue.slice(1) : inputTelephoneValue
    const datas = {
      telephone: inputTelephoneValue, 
    }

    setIsValid(false)
    apicall('/accounts/user_have_account', (resp) => {
      console.log(resp);
      if (!resp.ok)
      {
        if (resp.NetworkError)
          navigation.navigate('NetworkError', {NetworkStatus: resp.NetworkStatus});
        setIsValid(true)
        return;
      }
      const authorize_token = resp.message.authorize_token;
      navigation.navigate(resp.message.UserHaveAccount ? "Login" : "Register", {telephone: inputTelephoneValue, authorize_token, accountId: resp.message.accountId})
    }, datas)
  }
  
  return (
    <View style={container}>
      <View style={{width: "100%"}}>

        {   Component.Title('Saisissez votre téléphone', 1, { marginBottom: 20 })   }
        
        {   Component.Title('Nous allons vous rediriger sur l\'espace approprié', 5)   }

        <TouchableOpacity style={InputProperties.element} onPress={handlePress}>
          <Text style={InputProperties.label}>Téléphone</Text>
          <TextInput ref={inputEmail} inputMode="tel" autoComplete="tel-national"
            style={InputProperties.input} maxLength={10}
            onChangeText={handleTelephoneChange} 
          />
        </TouchableOpacity>

      </View>

      {   Component.Button('Suivant', handleSubmit, isValid)   }

      <StatusBar style="auto" />
    </View>
  );
}
 