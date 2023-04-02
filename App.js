import StartScreenPage from './pages/StartScreen';
import NetworkErrorPage from './pages/NetworkError';

import WelcomePage from './pages/category/Visitor/Welcome';
  import UserHaveAccountPage from './pages/category/Visitor/UserHaveAccount';

  import RegisterPage from './pages/category/Visitor/Register';
  import RegisterIdentityPage from './pages/category/Visitor/RegisterIdentity';

  import LoginPage from './pages/category/Visitor/Login';

import DashboardPage from './pages/category/Dashboard/Home';
  import AccountPage from './pages/category/Dashboard/Account';
  import NotificationPage from './pages/category/Dashboard/Notification';

import Storage from './pages/core/Storage';
global.Storage = Storage;

import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { v5 as uuidv5 } from 'uuid';
import { Platform } from 'react-native';


const Stack = createStackNavigator();
global.accounts = {};
global.account = {};

global.accountActions = {
  logout: (navigation = null) => {
    delete accounts[account.accountId];
    account = {};

    Storage.set('@accounts', JSON.stringify(accounts));
    Storage.set('@account', JSON.stringify({}));
    if(navigation)
      navigation.reset({ index: 0, routes: [{ name: 'StartScreen' }], })
  }
}


const device = Platform.Serial || `${Platform.constants.Manufacturer}-${Platform.constants.Model}`;
global.deviceId = uuidv5(device, "1b671a64-40d5-491e-99b0-da01ff1f3341");
global.deviceName = Platform['__constants'].Manufacturer + " " + Platform['__constants'].Model;

function App() {

 
  function VisitorStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomePage} />
        <Stack.Screen name="UserHaveAccount" options={{title:"Détection de compte"}} component={UserHaveAccountPage} />
        <Stack.Screen name="Register" options={{title:"Création de compte"}} component={RegisterPage} />
        <Stack.Screen name="RegisterIdentity" options={{title:"Création de compte", headerShown: false }} component={RegisterIdentityPage} />
        <Stack.Screen name="Login" options={{title:"Se connecter"}} component={LoginPage} />
      </Stack.Navigator>
    );
  }
  
  function DashboardStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false, animationEnabled: false }} component={DashboardPage} />
        <Stack.Screen name="Account" options={{ animationEnabled: false }} animationEnabled={false}  component={AccountPage} />
        <Stack.Screen name="Notification" options={{ headerShown: false, animationEnabled: false }}  animationEnabled={false}  component={NotificationPage} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="StartScreen" options={{ headerShown: false }} component={StartScreenPage} />
        <Stack.Screen name="NetworkError" options={{ headerShown: false }} component={NetworkErrorPage} />
        <Stack.Screen name="Visitor" options={{ headerShown: false }}  component={VisitorStack} />
        <Stack.Screen name="Dashboard" options={{ headerShown: false }}  component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );



}


let token;
let requestInProgress = false;
global.apicall = async (event, cb, message = {}) => {
  if(requestInProgress) return;
  let datas = {};

  
  datas.message = message;
  datas.authority = {
    NAME: deviceName,
    ID: deviceId,
  }
  if (account && account.accountId)
  {
    const authorization = accounts[account.accountId];
   
    let AuthorityData = {
      ACCOUNT_ID: account.accountId,
      ACCESS_TOKEN: authorization.access_token,
      REFRESH_TOKEN: authorization.refresh_token,
    }
    datas.authority = Object.assign({...datas.authority, ...AuthorityData});
  }
  
  requestInProgress = true;
  const response = await fetch('https://alice.hugochilemme.com'+event, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datas),
  });
  requestInProgress = false;
  if (response.ok == false)
    return cb({ok: false, NetworkError: true, NetworkStatus: response.status});

  // const response = {ok: true, message: {UserHaveAccount: true}};
  response.json().then((resp) => {
    console.log(resp);
    if (resp.ok && resp.new_token)
    {
      token = resp.new_token;
      console.log('Changed token', token);
    }
    if (resp.authority)
    {
      accounts[resp.authority.accountId] = resp.authority

      account.accountId = resp.authority.accountId;

      Storage.set('@accounts', JSON.stringify(accounts));
      Storage.set('@account', JSON.stringify(account));
      console.log('user added account', account);
    }
    
    cb(resp)
  })
  
}
global.app = App;
export default App;
