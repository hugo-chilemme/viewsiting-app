import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import NavbarComponent from '../../components/Navbar';
import EventComponent from '../../components/Event';

function HomeScreen({navigation}) {

   

    return (
        <View style={container}>

            <SafeAreaView>

                <View style={header.container}>
                    <Text style={header.title}>Mes messages 🤖</Text>
                </View>
          
                <View style={alert.container}>
                  <Text style={alert.text}>Cette fonctionnalité n'est pas encore disponible, elle sera implémentée ultérieurement.</Text>
                </View>

                <StatusBar style="auto" />

            
            </SafeAreaView>


            <NavbarComponent page='Messages' navigation={navigation}/>

        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  padding:20,
  backgroundColor: '#fff',
  width: '100%',
});

const alert = {
  container: {
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    padding: 15
  },
  text: {
    lineHeight: 25,
    color: "#303030"
  }
}
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
  