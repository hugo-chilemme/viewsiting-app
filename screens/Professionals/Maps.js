import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';
import { Icon } from '@rneui/themed';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import NavbarComponent from '../../components/Navbar';

function HomeScreen({navigation}) {

  const mapViewRef = useRef(null);
  const [address, setAddress] = useState(null);
  const [adderMenuOpen, setAdderMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 43.6042600,
    longitude: 1.4436700,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  });
  
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');


  const options = ['Client en cours', 'Revenir plus tard', 'Concurence', 'Ancienne vente', 'Aucun status'];

  const handleOptionPress = (option) => {
    setSelectedValue(option);
  };

  useEffect(() => {
    setTimeout(async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      if (mapViewRef.current) {
        mapViewRef.current.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0015,
        });
      }
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const addressData = await mapViewRef.current.addressForCoordinate(location.coords);
      setAddress(`${addressData.name} ${addressData.thoroughfare}, ${addressData.postalCode} ${addressData.locality}`);
    }, 250);
  }, []);


  const ShowAddressWidget = () => {
    if (!address) return;
    return (
      <View style={maps.container}>
          <Text style={maps.address}>{address}</Text>
      </View>
    )
  }

  const ShowAdderMenu = () => {
    if (!adderMenuOpen) return;
    
    console.log(currentLocation);
    return (
      <View style={formAdd.container}>
        <View style={formAdd.contains}>
        <Text style={formAdd.title}>Ajouter un point</Text>

        <Text style={formAdd.label}>Adresse de la personne</Text>
        <TextInput
          style={input}
          placeholder="Adresse"
          value={address}
        />

          <Text style={formAdd.label}>Ajouté un status</Text>

          {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionPress(option)}
          style={{
            backgroundColor: selectedValue === option ? '#F0F0F0' : 'white',
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: selectedValue === option ? 'black' : '#606060' }}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}


      
          <TouchableOpacity style={buttonsave.container} onPress={() => setAdderMenuOpen(false)}>
              <Text style={buttonsave.text}>Mettre à jour</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

    return (
        <View style={container}>
           

            <SafeAreaView>
{/* 
                <View style={header.container}>
                    <Text style={header.title}>Bonjour Olivier</Text>
                </View> */}

              <MapView showsMyLocationButton={false} initialRegion={currentLocation} ref={mapViewRef}  userLocationPriority="high" showsUserLocation={true} followsUserLocation={true}  style={{ width: '100%', height: '100%' }}></MapView>
              <StatusBar style="auto" />
            
            </SafeAreaView>
            { ShowAddressWidget() }

            { ShowAdderMenu() }
           
            <TouchableOpacity style={widget.container} onPress={() => setAdderMenuOpen(true)}>
              <Icon style={widget.icon} name="plus" type='feather' color="#FFFFFF"/>
            </TouchableOpacity>

            
            <NavbarComponent page='Maps' navigation={navigation}/>
        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  backgroundColor: '#fff',
  width: '100%',
});

const buttonsave = {
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A58A2',
    marginTop: 20,
    borderRadius: 10
  },
  text: {
    color:"#FFF"
  }
}

const formAdd = {
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column-reverse",
    backgroundColor: "#000000CC"
  },
  contains: {
    height: "auto",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  label: {
    marginBottom: 10,
    marginTop: 20,
    color: "#AAAAAA"
  }
}
const widget = {
  container: {
    position: 'absolute',
    bottom: 100,
    left: 30,
    backgroundColor: "#00000099",
    padding: 10,
    borderRadius: 100,
    shadowColor: '#202020',
  },
}
const maps = {
  container: {
    position: 'absolute',
    top: 20,
    left:20,
    right:20,
    height: 40,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    backgroundColor: "#00000099",

  },
  address: {
    color:'#eee',
    fontWeight: 500,
    fontSize: 16,
  }
}

const header = {
  container: {
    padding: 10,
    marginBottom: 15,
  },
  title: {
    fontFamily: "LexendMedium",
    fontSize: 15,
    fontWeight: 600,
    textAlign: "center"
  }
}

const input = {
  padding: 15,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 15,
  backgroundColor: '#F9F9F9',
};
export default HomeScreen;
  