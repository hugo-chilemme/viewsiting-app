import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Title, ButtonProperties} from '../default.styles';

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
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <Title size="1" title="L'immobilier dans votre poche" properties={styles.title}></Title>
      <Title size="4" title="Application N°1 dans l’immobilier"></Title>
      <Button title="Suivant" press="Saisissez votre adresse email"></Button>
      <StatusBar style="auto" />
    </View>
  );
}
