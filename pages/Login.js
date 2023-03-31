import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title, Button } from '../default.styles';
import { InputProperties, TitleProperties, ButtonProperties } from './core/properties.js';
import React, { useState, useRef } from 'react';

export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });

  

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  let inputEmailValid = false;
  let inputEmailValue;

  const inputEmail = useRef(null);
  const submitButton = useRef(null);
  const [isValid, setIsValid] = useState(false);

  
  const handlePress = () => {
    if (inputEmail.current) {
      inputEmail.current.focus();
    }
  };

  const handleEmailChange = (text) => {
    const valid = validateEmail(text);
    inputEmailValue = text;
    setIsValid(valid);
  };
  
  
  const isValidEmail = () => {
    return isValid ? ButtonProperties.buttonText : ButtonProperties.buttonTextDisabled;
  };
  const handleSubmit = async () => {
    if(!isValid) return;
    try {
      const response = await fetch('https://example.com/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: 'example data' }),
      });
      console.log(response);
      // const data = await response.json();
      // Traiter la réponse du serveur ici
      // navigation.navigate('NextScreen');
    } catch (error) {
      console.error(error)
    }
    //  navigation.navigate('NextScreen'); 
  }

  return (
    <View style={container}>
      <View style={{width: "100%"}}>
        <Title size="0" title="Saisissez votre adresse email" properties={{ marginBottom: 20 }}></Title>
        <Title size="4" title="Nous allons vous rediriger sur l'espace approprié"></Title>

        <TouchableOpacity style={InputProperties.element} onPress={handlePress}>
          <Text style={InputProperties.label}>Adresse Email</Text>
          <TextInput ref={inputEmail} inputMode="email"
            style={InputProperties.input}
            onChangeText={handleEmailChange}
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
 