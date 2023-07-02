// Router.js
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lexend from './assets/fonts/Lexend-Medium.ttf';

// Import your screen components
import NotConnectedWelcome from './screens/NotConnected/Welcome';
import NotConnectedRequestEmail from './screens/NotConnected/RequestEmail';
import NotConnectedRegister from './screens/NotConnected/Register';
import NotConnectedLogin from './screens/NotConnected/Login';

import ProfessionalsDashboard from './screens/Professionals/Dashboard';
import ProfessionalsMaps from './screens/Professionals/Maps';

import Calendar from './screens/Global/Calendar';
import GoVisite from './screens/Global/GoVisite';
import GoVisiteCreate from './screens/GoVisite/Index';
import GoVisiteType from './screens/GoVisite/Type';
import GoVisiteCreator from './screens/GoVisite/Creator';

import Messages from './screens/Global/Messages';


global.GoVisiteStorage = {};

const Stack = createStackNavigator();


function Router() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        LexendRegular: require('./assets/fonts/Lexend-Regular.ttf'),
        LexendMedium: require('./assets/fonts/Lexend-Medium.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // You can render a loading indicator here if desired
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome"  options={{ headerShown: false }} component={NotConnectedWelcome} />
        <Stack.Screen name="NotConnectedRequestEmail"  options={{ headerShown: false }} component={NotConnectedRequestEmail} />
        <Stack.Screen name="NotConnectedRegister"  options={{ headerShown: false }} component={NotConnectedRegister} />
        <Stack.Screen name="NotConnectedLogin"  options={{ headerShown: false }} component={NotConnectedLogin} />

        <Stack.Screen name="ProfessionalsDashboard"  options={{ headerShown: false }} component={ProfessionalsDashboard} />
        <Stack.Screen name="ProfessionalsMaps"  options={{ headerShown: false }} component={ProfessionalsMaps} />
        
        <Stack.Screen name="Calendar"  options={{ headerShown: false }} component={Calendar} />
        <Stack.Screen name="GoVisite"  options={{ headerShown: false }} component={GoVisite} />
        <Stack.Screen name="Messages"  options={{ headerShown: false }} component={Messages} />

        <Stack.Screen name="GoVisiteCreate"  options={{ headerShown: false }} component={GoVisiteCreate} />
        <Stack.Screen name="GoVisiteType"  options={{ headerShown: false }} component={GoVisiteType} />
        <Stack.Screen name="GoVisiteCreator"  options={{ headerShown: false }} component={GoVisiteCreator} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
