import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import NavbarComponent from '../../components/Navbar';


function HomeScreen({navigation}) {
    const [adresse, setAddress] = useState('16 rue des hirondelles, 31270 Cugnaux');
    const [buttonActive, setButtonActive] = useState(true);

    const handleAdresse = text => {
        setAddress(text);

        if (text.length > 3) 
            return setButtonActive(true);
        setButtonActive(false);
    }

    const handleSubmit = () => {
        if (!buttonActive) return;
        GoVisiteStorage.Address = adresse;
        navigation.navigate('GoVisiteType');
    }

    const button = {
        container: {
            backgroundColor: buttonActive ? "#1A58A2" : "#F0F0F0",
            padding: 15,
            width: '100%',
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
    
            position: 'absolute',
            bottom: 20
        },
        text: {
            color: buttonActive ? "#FFF" : "#808080",
            fontWeight: 600
        }
    }
    return (
        <View style={container}>

            <SafeAreaView style={{height: '100%'}}>
                <TouchableOpacity style={header.backIcon} onPress={() => navigation.navigate('GoVisite')}>
                    <Icon size={20} name="arrow-left" type='feather' color="#404040"/>
                </TouchableOpacity>
                <View style={header.container}>
                    <Text style={header.title}>GoVisite</Text>
                    <Text style={EmptyDescription}>Bienvenue sur GoVisite, une fonctionnalité de Viewsiting qui vous offre la possibilité d'enregistrer l'état d'un appartement ou d'une maison de manière simple et exhaustive.</Text>
                    

                    
                    <TextInput
                        style={input}
                        placeholder="Veuillez saisir l'adresse que vous visitez"
                        onChangeText={handleAdresse}
                    />
                    <TouchableOpacity style={button.container} onPress={handleSubmit}>
                        <Text style={button.text}>Suivant</Text>
                    </TouchableOpacity>
                </View>


                <StatusBar style="auto" />
            
            </SafeAreaView>
              
        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  padding:20,
  backgroundColor: '#fff',
  width: '100%',
});

const EmptyDescription = {
    width: '100%',
    textAlign: 'center',
    color:"#808080",
    marginTop: 20,
    lineHeight: 30,
    fontSize: 15
}



const header = {
  container: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: "LexendMedium",
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center"
  },
  backIcon: {
    width: "7%"
  }
}

const input = {
    backgroundColor: "#F5F5F5",
    padding:10,
    marginTop: 30,
    borderRadius: 5,
    width: '100%'
}


export default HomeScreen;
  