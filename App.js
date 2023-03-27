import WelcomePage from './pages/Welcome.js';
import LoginPage from './pages/Login';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator gestureEnabled="true">
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomePage} />
        <Stack.Screen name="Login" options={{title:"Saisissez votre adresse email"}} component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
