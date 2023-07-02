import * as React from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';


function HomeScreen({navigation}) {

    const isConnected = true;

    if (isConnected) 
      navigation.navigate('ProfessionalsDashboard');

    return (
        <View style={container}>

            <SafeAreaView>

                <Image 
                  style={{ marginBottom: 50, width:150, height:50 }} 
                  source={{ uri: 'https://viewsiting.com/wp-content/uploads/2023/01/cropped-logo-viewsiting-1-300x101.png' }}
                />
                
                <StatusBar style="auto" />
            
            </SafeAreaView>
            <TouchableOpacity style={button.element} onPress={() => navigation.navigate('NotConnectedRequestEmail')}>
                    
              <Text style={button.text}>Suivant</Text>
                
            </TouchableOpacity>
        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  padding:20,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const button = {
  element: {
    position: 'absolute',
    bottom: 20,
    left:20, 
    right: 20,
    margin: 'auto',
  },
  text: {
    color: '#fff',
    width: '100%',
    backgroundColor: '#1A58A2',
    padding: 15,
    borderRadius: 10,
    fontSize: 15,
    textAlign: 'center',
  }
}
  
export default HomeScreen;
  