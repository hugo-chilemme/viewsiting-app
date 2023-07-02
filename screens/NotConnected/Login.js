import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function HomeScreen({ route, navigation }) {
  const [email, setEmail] = useState(route.params.email || '');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    validateForm();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    validateForm();
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    setIsFormValid(email !== '' && isEmailValid(email) && password !== '');
  };

  const handleSubmit = () => {
    if (!isFormValid) return;

    // Vérifiez si l'e-mail existe via une API
    const isClient = false;

    if (!isClient)
      return navigation.navigate('NotConnectedRegister', { email });
    return navigation.navigate('NotConnectedLogin', { email });
  };

  const isAuthorized = () => {
    return isFormValid ? { ...button.text, ...button.active } : button.text;
  };

  return (
    <View style={container}>
      <SafeAreaView>
        <Text style={{ fontSize: 24, marginBottom: 30 }}>Saisissez votre email</Text>

        <TextInput
          style={input}
          placeholder="Adresse e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />

        <TextInput
          style={input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
      <TouchableOpacity onPress={handleSubmit} disabled={!isFormValid}>
        <Text style={isAuthorized()}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const container = StyleSheet.create({
  flex: 1,
  padding: 20,
  backgroundColor: '#fff',
  justifyContent: 'center',
  width: '100%',
});

const button = {
  text: {
    color: '#707070',
    width: '100%',
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  active: {
    backgroundColor: '#1A58A2',
    color: '#FFF',
  },
};

const input = {
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  backgroundColor: '#F9F9F9',
};

export default HomeScreen;
