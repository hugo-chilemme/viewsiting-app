import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title, Button } from '../default.styles';
import { InputProperties, TitleProperties, ButtonProperties } from './core/properties.js';
import React, { useState, useRef } from 'react';


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
  const submitButton = useRef(null);
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
  
  
  const isValidEmail = () => {
    return isValid ? ButtonProperties.buttonText : ButtonProperties.buttonTextDisabled;
  };
  const handleSubmit = async () => {
    if(!isValid || !inputTelephoneValue) return;
    inputTelephoneValue = inputTelephoneValue.length == 10 ? inputTelephoneValue.slice(1) : inputTelephoneValue
    const datas = {
      telephone: inputTelephoneValue, 
      auds: deviceId,
      audsName: deviceName
    }
    apicall('/accounts/user_have_account', (resp) => {
      console.log(resp);
      if (!resp.ok)
        return;

      const authorize_token = resp.message.authorize_token;
      navigation.navigate(resp.message.UserHaveAccount ? "Login" : "Register", {telephone: inputTelephoneValue, authorize_token})

    }, datas)
  }
  
  return (
    <View style={container}>
      <View style={{width: "100%"}}>
        <Title size="1" title="Saisissez votre numéro de téléphone" properties={{ marginBottom: 20 }}></Title>
        <Title size="5" title="Nous allons vous rediriger sur l'espace approprié"></Title>

        <TouchableOpacity style={InputProperties.element} onPress={handlePress}>
          <Text style={InputProperties.label}>Téléphone</Text>
          <TextInput ref={inputEmail} inputMode="tel" autoFocus={true}
            style={InputProperties.input} maxLength={10}
            onChangeText={handleTelephoneChange} 
          />
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={ButtonProperties.button} onPress={handleSubmit}>
        <Text ref={submitButton} style={isValidEmail()}>Suivant</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
 