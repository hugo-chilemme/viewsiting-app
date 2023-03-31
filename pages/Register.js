import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title, Button } from '../default.styles';
import { InputProperties, TitleProperties, ButtonProperties } from './core/properties.js';
import React, { useState, useRef } from 'react';


let datas = {}


export default function RegisterPage({route, navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    paddingTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
  });
  datas.email = route.params.email;

  const submitButton = useRef(null);
  const [isValid, setIsValid] = useState(false);

  const setPrenomValue = (value) => {
    datas.prenom = value;
    isFromComplete()
  }
  const setNomValue = (value) => {
    datas.nom = value.toUpperCase();
    isFromComplete()
  }
  const setTelephoneValue = (value) => {
    datas.telephone = value;
    isFromComplete()
  }

  const isFromComplete = () => {
    console.log(datas)
    return isValid ? ButtonProperties.buttonText : ButtonProperties.buttonTextDisabled;
  };
  const handleSubmit = async () => {
    if(!isValid) return;
    try {
      // const response = await fetch('https://example.com/api/data', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ data: 'example data' }),
      // });

      const response = {ok: true, message: {UserHaveAccount: false}};

      // const data = await response.json();
      inputEmailValue = inputEmailValue;
      if(!response.message.UserHaveAccount)
        navigation.navigate('Register', {email: inputEmailValue});

    } catch (error) {
      console.error(error)
    }
    //  navigation.navigate('NextScreen'); 
  }

  return (
    <View style={container}>
      <View style={{width: "100%"}}>
        <Title size="0" title="Nouveau compte" properties={{ marginBottom: 10 }}></Title>
        <Title size="3" title={`${datas.email}`}></Title>

        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Prénom</Text>
          <TextInput inputMode="text" 
          onChangeText={setPrenomValue}
            style={InputProperties.input}
          />
        </TouchableOpacity>
        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Nom</Text>
          <TextInput inputMode="text"
          onChangeText={setNomValue}
            style={InputProperties.input}
          />
        </TouchableOpacity>
        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Téléphone (par défaut France)</Text>
          <TextInput inputMode="tel" maxLength={10}
            onChangeText={setTelephoneValue}
            style={InputProperties.input}
          />
        </TouchableOpacity>

        <TouchableOpacity style={ButtonProperties.buttonAbsolute} onPress={handleSubmit}>
          <Text ref={submitButton} style={isFromComplete()}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
 