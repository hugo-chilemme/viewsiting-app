import WelcomePage from './pages/Welcome.js';
import UserHaveAccountPage from './pages/UserHaveAccount';
import RegisterPage from './pages/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator gestureEnabled="true">
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomePage} />
        <Stack.Screen name="UserHaveAccount" options={{title:"Saisissez votre adresse email"}} component={UserHaveAccountPage} />
        <Stack.Screen name="Register" options={{title:"Création de compte"}} component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
