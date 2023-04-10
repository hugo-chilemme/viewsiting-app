import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text} from 'react-native';
import { Title } from '../../core/styles';
import { InputProperties, ButtonProperties } from '../../core/properties.js';
import React, { useState, useRef } from 'react';
import Account from '../../../backend/account.class';

let datas = {}


export default function RegisterPage({route, navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });
  datas.telephone = route.params.telephone;
  datas.authorize_token = route.params.authorize_token;
  datas.auds = deviceId;

  const TextPassword = useRef(null);
  const submitButton = useRef(null);
  const [isValid, setIsValid] = useState(false);


  const SetFormValue = (key, value) => {
    datas[key] = value.trim();
    if (datas.password.length > 3 && datas.password.length < 32)
      return setIsValid(true);
    return setIsValid(false)
  }

  const setPasswordValue = (value) => {
    SetFormValue('password', value);
  }
  const isFromComplete = () => {
    return isValid ? ButtonProperties.buttonText : ButtonProperties.buttonTextDisabled;
  };
  const handleSubmit = async () => {
    if(!isValid) return;

    if (datas.password < 8)
      return Alert.alert('Le mot de passe est trop court');


    setIsValid(false)
    apicall('/accounts/login', (resp) => {
      if (!resp.ok)
      {
        if (resp.NetworkError)
          navigation.navigate('NetworkError', resp.NetworkStatus);
        setIsValid(true)
        return;
      }

      accounts.users[resp.authority.accountId] = new Account(resp.authority.accountId, resp.authority);
      accounts.save();
      Storage.set('@account', JSON.stringify({accountId: resp.authority.accountId}));
      navigation.reset({ index: 0, routes: [{ name: 'StartScreen' }] });

    }, datas)
      
  }

  
  return (
    <View style={container}>
      <View style={{width: "100%"}}>
        <Title size="0" title="Se connecter à" properties={{ marginBottom: 15 }}></Title>
        <Title size="3" title={`+33 ${datas.telephone}`}></Title>

        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Mot de passe</Text>
          <TextInput ref={TextPassword} inputMode="text" secureTextEntry={true} autoComplete="current-password"
            onChangeText={setPasswordValue}
            style={InputProperties.input}
          />
        </TouchableOpacity>
      

        <TouchableOpacity style={ButtonProperties.buttonAbsolute} onPress={handleSubmit}>
          <Text ref={submitButton} style={isFromComplete()}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
 