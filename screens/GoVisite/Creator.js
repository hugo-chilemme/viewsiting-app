import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import NavbarComponent from '../../components/Navbar';
import { rooms, accessoires } from '../../components/GoVisite';



function HomeScreen({navigation}) {
    const [typeMenuAddRoom, setTypeMenuAddRoom] = useState(false);
    const [idMenuEditRoom, setIdMenuEditRoom] = useState(null);

    const [showMenuAddAccessoire, setShowMenuAddAccessoire] = useState(false);

    const [roomsList, setRoomsList] = useState(GoVisiteStorage.Rooms);

    const [EditorRoomSize, setEditorRoomSize] = useState('M');
    const [EditorRoomMurState, setEditorRoomMurState] = useState('neuf');
    const [EditorRoomSolState, setEditorRoomSolState] = useState('neuf');
    const [EditorRoomPlafondState, setEditorRoomPlafondState] = useState('neuf');


    const handleSave = () => {
        navigation.navigate('GoVisite');
    }

    const showEditRoomMenu = () => {
        if(idMenuEditRoom === null) return;
        const room = GoVisiteStorage.Rooms[idMenuEditRoom];
        if (!room.options) room.options = {};
        
        if (room.options.roomSize && room.options.roomSize !== EditorRoomSize)
            setEditorRoomSize(room.options.roomSize);

        const changeSize = size => {
            room.options.roomSize = size;
            setEditorRoomSize(size);
        }

        const changeEtats = (type, etat) => {
            room.options[type] = etat;
            if (type === 'mur') setEditorRoomMurState(etat);
            if (type === 'sol') setEditorRoomSolState(etat);
            if (type === 'plafond') setEditorRoomPlafondState(etat);
        }

        const selector = {
            container: {
                backgroundColor: "#F5F5F5",
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 5
            },
            item: {
                padding: 15,
                flex: 1,
                alignItems: 'center'
            },
            itemActive: {
                backgroundColor: '#1A58A222',
                borderRadius: 5,
            },
            desc: {
                color: "#aaa",
                fontSize: 13,
                marginTop: 5
            }
        }

        const list = {
            item: {
                padding: 15,
                backgroundColor: "#F7F7F7",
                borderRadius: 5,
                marginBottom: 5
            }
        }

        const del = {
            container: {
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30
            },
            text: {
                color: "#E24B55",
                fontWeight: 600
            }

        }


        if (showMenuAddAccessoire) {

            if (!room.options.accessoires ) room.options.accessoires = [];
            let options = [];
            for (const [key, value] of Object.entries(accessoires)) {
                if (value.allowed.includes(room.roomId)) {
                    options.push(
                        <TouchableOpacity style={list.item} onPress={() => {
                            room.options.accessoires.push(JSON.parse(JSON.stringify(value)));
                            setShowMenuAddAccessoire(false); 
                        }}>
                            <Text>{value.name}</Text>
                        </TouchableOpacity>
                    )
                }
            }


            return (
                <View style={menu.container}>
                    <View style={menu.contains}>
                        <ScrollView>
                            <Text style={menu.title}>Ajouter un accessoire</Text>

                            { options }
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={{flex: 1}} onPress={() => setShowMenuAddAccessoire(false)}>
                    </TouchableOpacity>
                </View>
            )
        }

        const showAccessoiresInRoom = () => {
            if (!room.options.accessoires ) room.options.accessoires = [];
            let options = [];
            for (let i = 0; i < room.options.accessoires.length; i++) {
                const accessoire = room.options.accessoires[i];
                options.push(
                    <TouchableOpacity style={list.item} onPress={() => {
                        room.options.accessoires.splice(i, 1); // Supprimer l'élément à l'index i
                        setIdMenuEditRoom(null);
                   }}> 
                        <Text>{accessoire.name}</Text> 
                    </TouchableOpacity>
                );
            }
            return options;
        }
        
        return (
            <View style={menu.container}>
                <View style={menu.contains}>
                    <ScrollView>
                        <Text style={menu.title}>{room.name}</Text>
                        <Text style={menu.description}>Bienvenue dans l'interface de gestion d'une pièce. Ici, vous avez la possibilité d'ajouter des accessoires à la pièce et de marquer l'état général de celle-ci.</Text>
                    

                        <Text style={menu.label}>Veuillez indiqué la taille (m²)</Text>
                        <View style={selector.container}>
                            <TouchableOpacity onPress={() => changeSize('S')} style={'S' === EditorRoomSize ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>S</Text> 
                                <Text style={selector.desc} >{room.personalized.roomSize['S'].join('-')}</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => changeSize('M')} style={'M' === EditorRoomSize ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>M</Text> 
                                <Text style={selector.desc}>{room.personalized.roomSize['M'].join('-')}</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => changeSize('L')} style={'L' === EditorRoomSize ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>L</Text> 
                                <Text style={selector.desc}>{room.personalized.roomSize['L'].join('-')}</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => changeSize('XL')} style={'XL' === EditorRoomSize ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>XL</Text> 
                                <Text style={selector.desc}>{room.personalized.roomSize['XL'].join('-')}</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeSize('XXL')} style={'XXL' === EditorRoomSize ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>XXL</Text> 
                                <Text style={selector.desc}>{room.personalized.roomSize['XXL'][0]} et +</Text> 
                            </TouchableOpacity>
                        </View>

                        <Text style={menu.label}>Veuillez indiqué l'états des murs</Text>
                        <View style={selector.container}>
                            <TouchableOpacity onPress={() => changeEtats('mur', 'neuf')} style={'neuf' === EditorRoomMurState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>🆕</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('mur', 'bon')} style={'bon' === EditorRoomMurState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>👍</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('mur', 'convenable')} style={'convenable' === EditorRoomMurState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>👌</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('mur', 'renover')} style={'renover' === EditorRoomMurState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>🚧</Text> 
                            </TouchableOpacity>
                        </View>

                        <Text style={menu.label}>Veuillez indiqué l'états des sols</Text>
                        <View style={selector.container}>
                            <TouchableOpacity onPress={() => changeEtats('sol', 'neuf')} style={'neuf' === EditorRoomSolState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>🆕</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('sol', 'bon')} style={'bon' === EditorRoomSolState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>👍</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('sol', 'convenable')} style={'convenable' === EditorRoomSolState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>👌</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('sol', 'renover')} style={'renover' === EditorRoomSolState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>🚧</Text> 
                            </TouchableOpacity>
                        </View>

                        <Text style={menu.label}>Veuillez indiqué l'états des plafonds</Text>
                        <View style={selector.container}>
                            <TouchableOpacity onPress={() => changeEtats('plafond', 'neuf')} style={'neuf' === EditorRoomPlafondState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>🆕</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('plafond', 'bon')} style={'bon' === EditorRoomPlafondState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>👍</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('plafond', 'convenable')} style={'convenable' === EditorRoomPlafondState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>👌</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeEtats('plafond', 'renover')} style={'renover' === EditorRoomPlafondState ? {...selector.item, ...selector.itemActive} : selector.item }> 
                                <Text>🚧</Text> 
                            </TouchableOpacity>
                        </View>

                        <Text style={menu.label}>Accessoires</Text>
                        <View style={list.container}>

                            { showAccessoiresInRoom() }

                            <TouchableOpacity style={list.item} onPress={() => setShowMenuAddAccessoire(true)}> 
                                <Text style={{color: "#606060"}}>Ajouter un accessoire</Text> 
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={del.container} onPress={() => {
                            roomsList.splice(idMenuEditRoom, 1);
                            setRoomsList(roomsList);
                            setIdMenuEditRoom(null);
                        }}>
                            <Text style={del.text}>Supprimer la pièce</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <TouchableOpacity style={{flex: 1}} onPress={() => setIdMenuEditRoom(null)}>
                
                </TouchableOpacity>
            </View>
        )
    }

    const showAddRoomMenu = () => {
        if(!typeMenuAddRoom) return;
        let allowedRooms = [];

        const AddRoom = (value, id) => {
            const new_room = JSON.parse(JSON.stringify(value));
            new_room.roomId = id;

            GoVisiteStorage.Rooms.push(new_room);
            setRoomsList(GoVisiteStorage.Rooms);
            setTypeMenuAddRoom(false);
        }

        for (const [key, value] of Object.entries(rooms)) {
            if (value.roomType === typeMenuAddRoom) 
                allowedRooms.push(
                    <TouchableOpacity style={menu.item} onPress={() => AddRoom(value, key)}>
                        <Text>{value.name}</Text>
                    </TouchableOpacity>
                );
        }

        return (
            <View style={menu.container}>
                <View style={menu.contains}>
                    <ScrollView>
                        <Text style={menu.title}>Ajouter une pièce</Text>

                        { allowedRooms }
                    </ScrollView>
                </View>
                <TouchableOpacity style={{flex: 1}} onPress={() => setTypeMenuAddRoom(false)}>
                </TouchableOpacity>
            </View>
        )
    }


    const ShowListRooms = (type) => {
        let List = []
        let key = 0;
        for (let i = 0; i < roomsList.length; i++) {
            const room = roomsList[i];
            if (room.roomType === type) {
                List.push(
                    <TouchableOpacity style={category.item} key={i} onPress={() => setIdMenuEditRoom(i)}>
                        <Text>{room.name}</Text>
                    </TouchableOpacity>
                )
            }
        }
        return List;
    }
    return (
        <View>

            <SafeAreaView style={{height: '100%'}}>
                <ScrollView style={{padding: 20, backgroundColor: '#FFF'}}>
                    <View style={header.container}>
                        <Text style={header.title}>GoVisite</Text>
                    </View>

                    <View style={category.container}>
                        <Text style={category.label}>Intérieur</Text>

                        <View style={category.grid}>
                            { ShowListRooms('interieur') }

                            <TouchableOpacity style={category.item} onPress={() => setTypeMenuAddRoom('interieur')}>
                                <Icon size={20} name="plus" type='feather' color="#808080"/>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={category.container}>
                        <Text style={category.label}>Extérieur</Text>

                        <View style={category.grid}>
                            { ShowListRooms('exterieur') }

                            <TouchableOpacity style={category.item} onPress={() => setTypeMenuAddRoom('exterieur')}>
                                <Icon size={20} name="plus" type='feather' color="#808080"/>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={category.container}>
                        <Text style={category.label}>Annexes</Text>

                        <View style={category.grid}>
                            { ShowListRooms('annexe') }

                            <TouchableOpacity style={category.item} onPress={() => setTypeMenuAddRoom('annexe')}>
                                <Icon size={20} name="plus" type='feather' color="#808080"/>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={category.container}>
                        <Text style={category.label}>Environnement</Text>

                        <View style={category.grid}>
                            { ShowListRooms('environnement') }

                            <TouchableOpacity style={category.item} onPress={() => setTypeMenuAddRoom('environnement')}>
                                <Icon size={20} name="plus" type='feather' color="#808080"/>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <TouchableOpacity style={button.container} onPress={handleSave}> 
                        <Text style={button.text}>Sauvegarder</Text>
                    </TouchableOpacity>
                </ScrollView>

                <StatusBar style="auto" />
            </SafeAreaView>
            { showAddRoomMenu() }
            { showEditRoomMenu() }
        </View>
      
    );
}

const container = StyleSheet.create({
  flex: 1,
  padding:20,
  backgroundColor: '#fff',
  width: '100%',
});


const menu = {
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000000CC",
        elevation: 100,
        flexDirection: "column-reverse",
        zIndex: 100
    },
    contains: {
        backgroundColor: "#FFF",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title: {
        fontSize: 18,
        marginBottom: 20
    },
    description: {
        color: "#808080",
        lineHeight: 25
    },
    item: {
        padding: 15,
        backgroundColor: "#F9F9F9",
        borderRadius: 5,
        marginBottom: 2
    },
    label: {
        marginBottom: 10,
        marginTop: 30
    }
}

const button = {
    container: {
        backgroundColor: '#1A58A2',
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color:"#FFF"
    }
}
const EmptyDescription = {
    width: '100%',
    textAlign: 'center',
    color:"#808080",
    marginTop: 20,
    lineHeight: 30,
    fontSize: 15
}

const category = {
    container: {
        marginBottom: 25
    },
    label: {
        fontSize: 16,
        fontWeight: 500
    },
    item: {
        width: '49%',
        height: 75,
        backgroundColor:"#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10
    },
    grid: {
        flexDirection:'row', 
        justifyContent: 'space-between',
        flexWrap:'wrap'
    }

}

const header = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    height: 75
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center"
  },
  backIcon: {
    width: "7%"
  }
}

const input = {
    backgroundColor: "#F5F5F5",
    padding:10,
    marginTop: 30,
    borderRadius: 5,
    width: '100%'
}


export default HomeScreen;
  