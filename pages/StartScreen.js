import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';


export default function WelcomePage({navigation}) {
  const container = StyleSheet.create({
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  });
  const testNetwork = async (cb) => {
    try {
      const response = await fetch('https://www.google.com/');
      cb(response.ok)
    } catch (error) {
      console.error(error)
      cb(false)
    }
  }
  
  let isConnected = false;
  testNetwork((res) => {
    isConnected = res;
    if (!isConnected)
    {
      navigation.navigate('NetworkError')
    }
    else
    {
      Storage.get('@accounts', (res) => {
        accounts = res ? res : {};
          Storage.get('@account', (res) => {
            account.accountId = res && Object.keys(res).length > 0 && accounts[res.accountId] ? res.accountId : undefined;
            
            if (account.accountId)
            {
                apicall('/accounts/me', (res) => {
                  console.log(res)
                    if (res.ok)
                    {
                        account.user = res.message;
                        navigation.reset({
                          index: 0,
                          routes: [{ name: 'Dashboard' }],
                        });
                    }
                    else
                      navigation.reset({
                        index: 0,
                        routes: [{ name: 'Visitor' }],
                      });
                });
            }
            else
              navigation.reset({
                index: 0,
                routes: [{ name: 'Visitor' }],
              });
        })
      })
    }
  });



   
        
  return (
    <View style={container}>
      <Image style={{ marginBottom: 20, height:100, width:100 }} source={require('../assets/icon.png')} />
      <StatusBar style="auto" />
    </View>
  );
}
