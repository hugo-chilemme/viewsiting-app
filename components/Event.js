import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import moment from 'moment';

const moisEnFrancais = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre'
];

  
const Event = ({navigation, title, date}) => {
    if (!date) return;

    date = moment(date, 'MM-DD-YYYY').toDate();
    const s = {
        item: {
          flexDirection: 'row',
          padding: 8,
          backgroundColor: "#FFF",
          marginTop: 10,
          borderRadius: 5,
          alignItems: 'center'
        },
        date: {
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 15,
        },
        dateDay: {
          fontSize: 18,
          color: "#404040",
          fontWeight: 600
        },
        dateMonth: {
          fontSize: 12,
          fontWeight: 400,
          color: "#808080",
          textTransform: 'uppercase'
        },
        title: {
          fontSize: 14,
          color: "#505050",
          fontWeight: 500
        }
      }
    return (
        <TouchableOpacity style={s.item}>
            <View style={s.date}>
                <Text style={s.dateDay}>{date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}</Text>
                <Text style={s.dateMonth}>{moisEnFrancais[date.getMonth()].substring(0, 4)}.</Text>
            </View>
            <View>
                <Text style={s.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )


}

export default Event;
  