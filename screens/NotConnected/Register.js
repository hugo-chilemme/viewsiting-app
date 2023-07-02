import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function HomeScreen({ route, navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(route.params.email || '');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    validateForm();
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
    validateForm();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    validateForm();
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateForm();
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    setIsFormValid(firstName !== '' && lastName !== '' && password !== '' && isEmailValid(email));
  };

  const handleSubmit = () => {
    if (!isFormValid) return;

    // Vérifiez si l'e-mail existe via une API
    const isClient = false;

    navigation.navigate('NotConnectedRegister', { email });
  };

  const isAuthorized = () => {
    return isFormValid ? { ...button.text, ...button.active } : button.text;
  };

  return (
    <View style={container}>
      <SafeAreaView>
        <Text style={{ fontSize: 24, marginBottom: 30 }}>Créer un compte</Text>

        <TextInput
          style={input}
          placeholder="Prénom"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />

        <TextInput
          style={input}
          placeholder="Nom"
          value={lastName}
          onChangeText={handleLastNameChange}
        />

        <TextInput
          style={input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />

        <TextInput
          style={input}
          placeholder="Adresse e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
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
  marginBottom: 15,
  backgroundColor: '#F9F9F9',
};

export default HomeScreen;
