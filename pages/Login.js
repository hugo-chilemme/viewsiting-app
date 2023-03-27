import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title, Input, ButtonProperties} from '../default.styles';

export default function WelcomePage({navigation}) {
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 20
    },
    title: {
      marginBottom: 20,
    },
  });
  
  const Button = ({ title, press }) => (
      <TouchableOpacity
        style={ButtonProperties.button}
        onPress={() => navigation.navigate(press)}
      >
        <Text style={ButtonProperties.buttonText}>{title}</Text>
      </TouchableOpacity>
  );



  return (
    <View style={{...styles.container, ...{ alignItems: 'stretch'}}}>
      <Title size="0" title="Saisissez votre adresse email" properties={styles.title}></Title>
      <Title size="4" title="Nous allons vous rediriger sur l'espace approprié"></Title>
      <Input autoComplete="email" placeholder="Adresse Email"></Input>
      <Button title="Suivant" press="Continuer"></Button>
      <StatusBar style="auto" />
    </View>
  );
}
