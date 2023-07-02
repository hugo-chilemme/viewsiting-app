import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

const Navbar = ({navigation, page}) => {

    const s = {
        container: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 65,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 50,
          backgroundColor: '#F5F5F5',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          shadowColor: '#202020',
          elevation: 50,
        },
        item: {
            flex: 1,
            padding: 15,
        }
      }
      

    return (
        <View style={s.container}>
            <TouchableOpacity style={s.item} onPress={() => navigation.navigate('Messages')}>
                <Icon size={20} name="message-square" type='feather' color={page === 'Messages' ? "#1A58A2" : "#808080"}/>
            </TouchableOpacity>
            <TouchableOpacity style={s.item} onPress={() => navigation.navigate('ProfessionalsMaps')}>
                <Icon size={20} style={s.icon} name="map" type='feather' color={page === 'Maps' ? "#1A58A2" : "#808080"}/>
            </TouchableOpacity>
            <TouchableOpacity style={s.item} onPress={() => navigation.navigate('ProfessionalsDashboard')}>
                <Icon size={20} style={s.icon} name="home" type='feather' color={page === 'Dashboard' ? "#1A58A2" : "#808080"}/>
            </TouchableOpacity>
            <TouchableOpacity style={s.item} onPress={() => navigation.navigate('Calendar')}>
                <Icon size={20} style={s.icon} name="calendar" type='feather' color={page === 'Calendar' ? "#1A58A2" : "#808080"}/>
            </TouchableOpacity>
            <TouchableOpacity style={s.item} onPress={() => navigation.navigate('GoVisite')}>
                <Icon size={20} style={s.icon} name="eye" type='feather' color={page === 'GoVisite' ? "#1A58A2" : "#808080"}/>
            </TouchableOpacity>
        </View>
    )

}

export default Navbar;
  