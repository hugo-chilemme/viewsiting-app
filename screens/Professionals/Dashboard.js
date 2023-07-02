import * as React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Icon } from '@rneui/themed';
import NavbarComponent from '../../components/Navbar';
import EventComponent from '../../components/Event';

function HomeScreen({navigation}) {

    return (
        <View style={container}>

            <SafeAreaView>

                <View style={header.container}>
                    <Text style={header.title}>Bonjour Olivier</Text>
                </View>
                <View style={switchAccount.container}>
                  <TouchableOpacity style={switchAccount.item} onPress={() => Alert.alert("L'espace particulier n'est pas encore disponible")}>
                    <Text style={switchAccount.itemText}>Particulier</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={switchAccount.item}>
                    <Text style={{...switchAccount.itemText, ...switchAccount.itemTextActive}}>Profesionnel</Text>
                  </TouchableOpacity>
                </View>
                <View style={calendar.container}>
                    <Text style={calendar.label}>Prochains rendez-vous</Text>
                    {/* <Text style={calendar.empty}>Les rendez-vous ultérieurs s'afficheront ici </Text> */}

                    <EventComponent date="09-01-2023" title="Ouverture de l'app au public 😎"/>
                </View>
                <View style={prospections.container}>
                    <Text style={prospections.label}>Vos dernières prospections</Text>
                    <Text style={prospections.empty}>Les nouveaux clients s'afficheront ici</Text>
                </View>

                <StatusBar style="auto" />
            
            </SafeAreaView>
            <NavbarComponent page='Dashboard' navigation={navigation}/>
        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  padding:20,
  backgroundColor: '#fff',
  width: '100%',
});

const header = {
  container: {
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: "LexendMedium",
    fontSize: 17,
    fontWeight: 600,
    textAlign: "center"
  }
}

const switchAccount = {
  container: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    marginLeft: "15%",
    borderRadius: 100,
  },
  item: {
    padding: 10,
  },
  itemText: {
    fontSize: 13,
    fontFamily: "LexendRegular",
    color: "#505050",
    fontWeight: 400
  },
  itemTextActive: {
    color: "#1A58A2"
  }
}

const calendar = {
  container: {
    marginTop: 35
  },
  label: {
    fontFamily: "LexendMedium",
    fontSize: 14,
    color: "#606060"
  }
}

const prospections = {
  container: {
    marginTop: 25
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
  }
}
export default HomeScreen;
  