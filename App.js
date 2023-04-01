import WelcomePage from './pages/Welcome';
import UserHaveAccountPage from './pages/UserHaveAccount';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import NetworkErrorPage from './pages/NetworkError';

import DashboardPage from './pages/Dashboard';

import Storage from './pages/core/Storage.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { v5 as uuidv5 } from 'uuid';
import { Platform } from 'react-native';


const Stack = createStackNavigator();
global.accounts = {};
global.account = undefined;


const device = Platform.Serial || Platform.constants.Fingerprint || `${Platform.constants.Manufacturer}-${Platform.constants.Model}`;
global.deviceId = uuidv5(device, "1b671a64-40d5-491e-99b0-da01ff1f3341");
global.deviceName = Platform['__constants'].Manufacturer + " " + Platform['__constants'].Model;


function App() {
  Storage.get('@accounts', (res) => {
    accounts = res ? res : {};
  })
  
  return (
      <NavigationContainer>
        <Stack.Navigator gestureEnabled="true">
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomePage} />
          <Stack.Screen name="UserHaveAccount" options={{title:"Saisissez votre adresse email"}} component={UserHaveAccountPage} />
          <Stack.Screen name="Register" options={{title:"Création de compte"}} component={RegisterPage} />
          <Stack.Screen name="Login" options={{title:"Se connecter"}} component={LoginPage} />

          <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={DashboardPage} />

          <Stack.Screen name="NetworkError" options={{ headerShown: false }} component={NetworkErrorPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );



}


let token;
global.apicall = async (event, cb, datas = {}) => {
  if (token)
    datas.token = token;

  const response = await fetch('https://alice.hugochilemme.com'+event, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datas),
});

// const response = {ok: true, message: {UserHaveAccount: true}};
response.json().then((resp) => {
  if (resp.ok && resp.new_token)
  {
    token = resp.new_token;
    console.log('Changed token', token);
  }
  
  cb(resp)
})
}
global.app = App;
export default App;
