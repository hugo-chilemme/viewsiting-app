import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ButtonProperties } from './core/properties.js';
import { Title,} from '../default.styles';
import React, { useState, useEffect  } from 'react';

export default function NetworkErrorPage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  });
  const handleSubmit = () => {
    console.log('test')
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
      const checkInternet = async () => {
        try {
          const response = await fetch('https://www.google.com/');
          setIsConnected(response.ok);
        } catch (error) {
          setIsConnected(false);
        }
      };
      checkInternet();
    }, []);

    if(isConnected)
      navigation.navigate('Welcome')

  }
  return (
    <View style={container}>
      <Image style={{ marginBottom: 50, height:75, width:75, stroke: "#000" }} source={require('../assets/icons/NetworkError.png')} />
      <Title size="0" title="Vous êtes hors connexion" properties={{ marginBottom: 20 }}></Title>
      <Title size="4" title="Veuillez vous connecter à internet"></Title>
      <TouchableOpacity style={ButtonProperties.button} onPress={handleSubmit}>
          <Text style={ButtonProperties.buttonText}>Réessayer</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
