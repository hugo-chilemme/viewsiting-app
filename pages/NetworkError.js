import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ButtonProperties } from './core/properties.js';
import { Title,} from '../default.styles.js';
import React, { useState, useEffect  } from 'react';

export default function NetworkErrorPage({navigation, route}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  });
  const NetworkStatus = route.params.NetworkStatus;
  if (NetworkStatus !== 502)
    return (
      <View style={container}>
        <Image style={{ marginBottom: 50, height:75, width:75 }} source={require('../assets/icons/NetworkError.png')} />
        <Title size="0" title="Vous êtes hors connexion" properties={{ marginBottom: 20 }}></Title>
        <Title size="4" title="Veuillez vous connecter à internet"></Title>
        <TouchableOpacity style={ButtonProperties.button} onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          });
        }}>
            <Text style={ButtonProperties.buttonText}>Réessayer</Text>
          </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  return (
    <View style={container}>
      <Image style={{ marginBottom: 50, height:75, width:75 }} source={require('../assets/icons/NetworkError.png')} />
      <Title size="0" title="Il y a eu un problème" properties={{ marginBottom: 20 }}></Title>
      <Title size="4" title="Une erreur interne est survenue"></Title>
      <TouchableOpacity style={ButtonProperties.button} onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        });
      }}>
          <Text style={ButtonProperties.buttonText}>Réessayer</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
