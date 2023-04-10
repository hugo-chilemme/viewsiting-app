import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Account from '../backend/account.class';

export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  });

  Storage.get('@accounts', (accounts_list = []) => {
      Storage.get('@account', async (active) => {
        for (const account of accounts_list)
        {
          accounts.users[account.accountId] = new Account(account.accountId, account.authority);

          if (active && active.accountId === account.accountId)
          {
            await accounts.users[account.accountId].connect();
          }
        }

        const name = accounts.active ? "Dashboard" : "Visitor";

        if (accounts.active)
        {
          console.info(accounts.active);
          if (!accounts.active.user || !accounts.active.user.PRENOM || !accounts.active.user.NOM)
          {
            navigation.navigate('RegisterIdentity');
            return;
          }
        }

        navigation.reset({
          index: 0,
          routes: [{ name }],
        });
      });
      
  })



   
        
  return (
    <View style={container}>
      <Image style={{ width:150, height: 50}} source={require('../assets/icon.png')} />
      <StatusBar style="auto" />
    </View>
  );
}
