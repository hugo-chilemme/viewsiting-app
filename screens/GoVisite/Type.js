import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import NavbarComponent from '../../components/Navbar';


function HomeScreen({navigation}) {
    const [type, setType] = useState(null);
    const [buttonActive, setButtonActive] = useState(false);

    const handleAdresse = text => {
        setType(text);
        setButtonActive(true);
    }

    const handleSubmit = () => {
        if (!type) return;
        GoVisiteStorage.IsAppartment = type === "appartment" ? true : false;
        GoVisiteStorage.Rooms = [];
        navigation.navigate('GoVisiteCreator');
    }

    const button = {
        container: {
            backgroundColor: type ? "#1A58A2" : "#F0F0F0",
            padding: 15,
            width: '100%',
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
    
            position: 'absolute',
            bottom: 20
        },
        text: {
            color: type ? "#FFF" : "#808080",
            fontWeight: 600
        }
    }

    const isSelected = (t) => {
        return t === type ? {...dropdownItem, ...dropdownItemActive} : dropdownItem;
    }
    return (
        <View style={container}>

            <SafeAreaView style={{height: '100%'}}>
                <TouchableOpacity style={header.backIcon} onPress={() => navigation.navigate('GoVisite')}>
                    <Icon size={20} name="arrow-left" type='feather' color="#404040"/>
                </TouchableOpacity>
                <View style={header.container}>
                    <Text style={header.title}>Veuillez saisir le type de bien</Text>
                    <Text style={EmptyDescription}>Quel type de bien immobilier souhaitez-vous enregistrer : une maison ou un appartement ?</Text>
                    
                    <TouchableOpacity style={isSelected('maison')} onPress={() => setType('maison')}>
                        <Text>Maison</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected('appartment')} onPress={() => setType('appartment')}>
                        <Text>Appartement</Text>
                    </TouchableOpacity>
                  
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

const dropdownItem = {
    backgroundColor: "#F8F8F8",
    width: '100%',
    padding: 15,
    marginTop: 5,
    borderRadius: 5,
    borderColor: '#F8F8F8',
    borderWidth: 2,
}

const dropdownItemActive = {
    borderColor: '#1A58A2',
    borderWidth: 2,
}
const EmptyDescription = {
    width: '100%',
    textAlign: 'center',
    color:"#808080",
    marginTop: 20,
    marginBottom: 40,
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
  