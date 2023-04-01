import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text } from 'react-native';
import { Title } from '../default.styles';
import { InputProperties, ButtonProperties } from './core/properties.js';

let datas = {};

export default function RegisterPage({ route, navigation }) {
  const [isValid, setIsValid] = useState(false);

  datas.telephone = route.params.telephone;
  datas.authorize_token = route.params.authorize_token;
  datas.auds = deviceId;

  const submitButtonRef = useRef(null);

  const setFormValue = (key, value) => {
    datas[key] = value.trim();
    if (datas.telephone && datas.password && datas.password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const setPasswordValue = (value) => {
    setFormValue('password', value);
  };

  const handleSubmit = async () => {
    if (!isValid) return;

    if (datas.password.length < 8) {
      return Alert.alert('Le mot de passe est trop court');
    }

    apicall('/accounts/register', (resp) => {
      if (resp.ok && resp.message.UserHaveBeenCreate) {
        navigation.navigate('Login', { email: datas.email, authorize_token: datas.authorize_toke });
      }
    }, datas);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title size="0" title="Création de compte" properties={{ marginBottom: 15 }} />
        <Title size="4" title={`+33 ${datas.telephone}`} />

        <TouchableOpacity style={InputProperties.element}>
          <Text style={InputProperties.label}>Mot de passe (minimum 8 caractères)</Text>
          <TextInput
            inputMode="text"
            secureTextEntry={true}
            autoComplete="password-new"
            onChangeText={setPasswordValue}
            style={InputProperties.input}
          />
        </TouchableOpacity>

        <TouchableOpacity style={ButtonProperties.buttonAbsolute} onPress={handleSubmit}>
          <Text ref={submitButtonRef} style={isValid ? ButtonProperties.buttonText : ButtonProperties.buttonTextDisabled}>
            {ButtonProperties.buttonText}
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
});
