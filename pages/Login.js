import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import { Title, Input, Button } from '../default.styles';

export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });

  let email;
  const onchange = (data) => {
    email = data
  }

  const submit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email))
      navigation.navigate("Welcome")
    else
      Alert.alert('Adresse email invalide');
  }
  return (
    <View style={container}>
      <View style={{width: "100%"}}>
        <Title size="0" title="Saisissez votre adresse email" properties={{ marginBottom: 20 }}></Title>
        <Title size="4" title="Nous allons vous rediriger sur l'espace approprié"></Title>
        <Input autoComplete="email" placeholder="Adresse Email" onchange={onchange}></Input>
      </View>
      <Button title="Suivant" redirect={submit}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
 