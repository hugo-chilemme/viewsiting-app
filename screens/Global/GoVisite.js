import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import NavbarComponent from '../../components/Navbar';


function HomeScreen({navigation}) {

    const [menuEvent, setMenuEvent] = useState(false);

    const showMenuEvent = () => {
      if (!menuEvent) return;

      return (
        <View style={eventMenu.container}>
          <View style={eventMenu.contains}>
            <Text style={eventMenu.title}>Ajouter un évènement</Text>

            <Text style={eventMenu.label}>Title de l'évènement</Text>
            <TextInput
                style={eventMenu.input}
                placeholder="Titre de l'évènement"
              />

            <Text style={eventMenu.label}>Saisir la date (JJ/MM/YYYY)</Text>
            <View style={eventMenu.boxDate}>
              <TextInput
                style={{...eventMenu.input, width: '30%'}}
                placeholder="JJ"
                value={new Date().getDate().toString()}
              />
              <TextInput
                style={{...eventMenu.input, width: '30%'}}
                placeholder="MM"
                value={new Date().getMonth().toString()}
              />
              <TextInput
                 style={{...eventMenu.input, width: '30%'}}
                placeholder="YYYY"
                value={new Date().getFullYear().toString()}
              />

            </View>
            <Text style={eventMenu.label}>Saisir l'heure (HH:MM)</Text>
            <View style={{...eventMenu.boxDate, width: '50%'}}>
              <TextInput
                style={{...eventMenu.input, width: '49%'}}
                placeholder="HH"
                value={new Date().getHours().toString()}
              />
              <TextInput
                 style={{...eventMenu.input, width: '49%'}}
                placeholder="MM"
                value={new Date().getMinutes().toString()}
              />

            </View>



              <TouchableOpacity style={{...adder.container, width: '100%', marginLeft: 0, marginTop: 50, padding: 12}} onPress={() => setMenuEvent(true)}> 
                  <Text style={adder.text}>Ajouter cet évènement</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{...adder.container, backgroundColor: '#F0F0F0', width: '100%', marginLeft: 0, marginTop: 0, padding: 12}} onPress={() => setMenuEvent(false)}> 
                  <Text style={{...adder.text, color: "#303030"}}>Annuler</Text>
              </TouchableOpacity>
          </View>
        </View>
      )

    }

    return (
        <View style={container}>

            <SafeAreaView style={{height: '100%'}}>

                <View style={header.container}>
                    <Text style={header.title}>Vos dernières visites</Text>
                </View>
               
                <Text style={EmptyDescription}>Pas de visite a afficher</Text>

                <TouchableOpacity style={widget.container} onPress={() => navigation.navigate('GoVisiteCreate')}>
                    <Icon style={widget.icon} name="plus" type='feather' color="#FFFFFF"/>
                </TouchableOpacity>


                <StatusBar style="auto" />

            
            </SafeAreaView>

            { showMenuEvent() }

            <NavbarComponent page='GoVisite' navigation={navigation}/>
              
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
    marginTop: 20
}
const widget = {
    container: {
      position: 'absolute',
      bottom: 60,
      right: 10,
      backgroundColor: "#00000099",
      padding: 10,
      borderRadius: 100,
      shadowColor: '#202020',
    },
  }


const eventMenu = {
  container: {
    position: 'absolute',
    top:0,
    bottom: 0,
    left:0,
    right:0,
    backgroundColor:"#000000CC",
    elevation: 100,
    zIndex: 100,
    flexDirection: 'column-reverse'
  },
  contains: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 600
  },
  label: {
    marginTop: 30,
    marginBottom: 10
  },
  boxDate: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    width: '100%',
    borderRadius: 10
  }
}

const adder ={
  container: {
    backgroundColor: "#1A58A2",
    width: '40%',
    marginLeft: '30%',
    borderRadius: 5,
    padding: 7,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 500,
  }
}


const header = {
  container: {
    height: 125,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: "LexendMedium",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center"
  }
}



export default HomeScreen;
  