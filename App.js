
import StartScreenPage from './pages/StartScreen';
import NetworkErrorPage from './pages/NetworkError';
import Account from './backend/account.class';
import WelcomePage from './pages/category/Visitor/Welcome';
  import UserHaveAccountPage from './pages/category/Visitor/UserHaveAccount';

  import RegisterPage from './pages/category/Visitor/Register';
  import RegisterIdentityPage from './pages/category/Visitor/RegisterIdentity';

  import LoginPage from './pages/category/Visitor/Login';

import DashboardPage from './pages/category/Dashboard/Home';
  import AccountPage from './pages/category/Dashboard/Account';
  import NotificationPage from './pages/category/Dashboard/Notification';

  import CreateWishHome from './pages/category/Dashboard/WishHome/Welcome';
  import WishHome_Me from './pages/category/Dashboard/WishHome/Me';
  import WishHome_Enfant from './pages/category/Dashboard/WishHome/Enfant';
  import WishHome_Me_Identifier from './pages/category/Dashboard/WishHome/Me_Identifier';
  import WishHome_Maried_Identifier from './pages/category/Dashboard/WishHome/Maried_Identifier';
  import WishHome_Finance from './pages/category/Dashboard/WishHome/Finance';
  import WishHome_Demarche_Banque from './pages/category/Dashboard/WishHome/Demarche_Banque';
  import WishHome_Revenu from './pages/category/Dashboard/WishHome/Revenu';
  import WishHome_Deplacement from './pages/category/Dashboard/WishHome/Deplacement';

import Storage from './pages/core/Storage';
global.Storage = Storage;

import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './backend/engine/api';

const Stack = createStackNavigator();



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

        <Stack.Screen name="CreateWishHome" options={{ headerShown: false}} animationEnabled={false}  component={CreateWishHome} />
        <Stack.Screen name="WishHome_Me" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Me} />
        <Stack.Screen name="WishHome_Enfant" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Enfant} />
        <Stack.Screen name="WishHome_Me_Identifier" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Me_Identifier} />
        <Stack.Screen name="WishHome_Maried_Identifier" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Maried_Identifier} />
        <Stack.Screen name="WishHome_Finance" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Finance} />
        <Stack.Screen name="WishHome_Demarche_Banque" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Demarche_Banque} />
        <Stack.Screen name="WishHome_Revenu" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Revenu} />
        <Stack.Screen name="WishHome_Deplacement" options={{ headerShown: false, animationEnabled: false}} animationEnabled={false}  component={WishHome_Deplacement} />
      
        <Stack.Screen name="SetProfil" options={{title:"Création de compte", headerShown: false }} component={RegisterIdentityPage} />
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
        <Stack.Screen name="RegisterIdentity" options={{title:"Création de compte", headerShown: false }} component={RegisterIdentityPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );



}

global.app = App;
export default App;
