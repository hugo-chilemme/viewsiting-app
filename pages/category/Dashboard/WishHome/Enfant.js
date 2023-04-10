import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Title } from '../../../core/styles';
import { InputProperties, ButtonProperties, SelectorProperties } from '../../../core/properties.js';
import React, { useState, useRef } from 'react';
import { Icon } from '@rneui/themed';

global.wishHome = {};
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

    const submitButton = useRef(null);
    const [isValid, setIsValid] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [buttonStyle, setButtonStyle] = useState(SelectorProperties.button);
    const [buttonStyle2, setButtonStyle2] = useState(SelectorProperties.button);

  const setEnfantValue = (resp) => {
    if (resp && resp >= 0 && resp <= 20 && !resp.includes('.')) setIsValid(true);
    else setIsValid(false);
    wishHome.children = resp;
  }
  const isFromComplete = () => {
    return isValid ? ButtonProperties.buttonText : ButtonProperties.buttonTextDisabled;
  };
  const handleSubmit = () => {
    if (isValid)
        navigation.navigate('WishHome_Me_Identifier')
  }
  return (
    <View style={container}>
      <TouchableOpacity style={quit} onPress={() => navigation.navigate('Home')}>
            <Icon name='x' type='feather' size={22} color="#fff" style={navbar.icon} />
        </TouchableOpacity>

      <View style={{padding: 20, height: '100%', justifyContent: "center"}}>

        <Title size="0" properties={{marginTop: 25, lineHeight: 50, width: "80%"}} title={`Combien avez-vous d'enfant dans le foyer ?`}></Title>

        
        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Veuillez saisir le nombre d'enfant</Text>
          <TextInput onChangeText={setEnfantValue} inputMode="decimal" autoComplete="off"
            style={InputProperties.input}
          />
        </TouchableOpacity>

        
      </View>
        <TouchableOpacity style={{...ButtonProperties.button, padding: 20}} onPress={handleSubmit}>
          <Text ref={submitButton} style={isFromComplete()}>Continuer</Text>
        </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}
