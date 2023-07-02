import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import NavbarComponent from '../../components/Navbar';
import EventComponent from '../../components/Event';

function HomeScreen({navigation}) {

    const [menuEvent, setMenuEvent] = useState(false);

    const showMenuEvent = () => {
      if (!menuEvent) return;

      return (
        <View style={eventMenu.container}>
          <View style={eventMenu.contains}>
            <ScrollView>
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
          </ScrollView>
          </View>
        </View>
      )

    }

    return (
        <View style={container}>

            <SafeAreaView>

                <View style={header.container}>
                    <Text style={header.title}>Votre calendrier 🚀</Text>
                </View>
                <View style={calendar.container}>
                    <TouchableOpacity style={adder.container} onPress={() => setMenuEvent(true)}>
                        <Text style={adder.text}>Nouveau</Text>
                    </TouchableOpacity>

                    <Text style={calendar.label}>Prochains rendez-vous</Text>

                    <EventComponent date="09-01-2023" title="Ouverture de l'app au public 😎"/>
                </View>

                <StatusBar style="auto" />

            
            </SafeAreaView>

            { showMenuEvent() }

            <NavbarComponent page='Calendar' navigation={navigation}/>

        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  padding:20,
  backgroundColor: '#fff',
  width: '100%',
});

const adder ={
  container: {
    backgroundColor: "#1A58A2",
    width: '30%',
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

const calendar = {
  container: {
    marginTop: 10
  },
  label: {
    fontFamily: "LexendMedium",
    fontSize: 14,
    color: "#606060"
  },
  empty: {
    fontFamily: "LexendRegular",
    fontSize: 13,
    marginTop: 10,
    color: "#aaa"
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  dateDay: {
    fontSize: 18,
    color: "#404040",
    fontWeight: 600
  },
  dateMonth: {
    fontSize: 12,
    fontWeight: 400,
    color: "#808080",
    textTransform: 'uppercase'
  },
  title: {
    fontSize: 14,
    color: "#505050",
    fontWeight: 500
  }
}


export default HomeScreen;
  