import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


function HomeScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailIsValid(isEmailValid(text));
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!emailIsValid) return;
    

    // check if email exist API
    const isClient = true;

    if (!isClient) 
      return navigation.navigate('NotConnectedRegister', {email});
    return navigation.navigate('NotConnectedLogin', {email});
    

  };

  const isAuthorized = () => {
    return emailIsValid ? {...button.text, ...button.active} : button.text;
  }

  
    return (
        <View style={container}>

            <SafeAreaView>

                <Text style={{ fontSize: 24, marginBottom: 30}}>Saisissez votre email</Text>

                <TextInput
                  style={input}
                  placeholder="Adresse e-mail"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={handleEmailChange}
                />

                <StatusBar style="auto" />
            
            </SafeAreaView>
            <TouchableOpacity onPress={handleSubmit}>
                    
              <Text style={isAuthorized()}>Suivant</Text>
                
            </TouchableOpacity>
        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  padding:20,
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
    color:"#FFF"
  }
}
  
const input = {
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  backgroundColor: "#F9F9F9"
}
export default HomeScreen;
  