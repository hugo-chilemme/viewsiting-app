
const rooms = {

    // INTERIEUR 
    'sejour': {
        name: 'Séjour',
        roomType: 'interieur',
        personalized: {
            roomSize: {
                S: [15, 25],
                M: [25, 40],
                L: [40, 60],
                XL: [60, 80],
                XXL: [80, -1],
            },
            etats: true
        }
    },
    'salle_de_bain': {
        name: 'Salle de bain',
        roomType: 'interieur',
        personalized: {
            roomSize: {
                S: [3, 6],
                M: [6, 9],
                L: [9, 12],
                XL: [12, 15],
                XXL: [15, -1],
            }
        }
    },
    'salle_eau': {
        name: 'Salle d\'eau',
        roomType: 'interieur',
        personalized: {
            roomSize: {
                S: [3, 6],
                M: [6, 9],
                L: [9, 12],
                XL: [12, 15],
                XXL: [15, -1],
            }
        }
    },
    'toilette': {
        name: 'Toilette',
        roomType: 'interieur',
        personalized: {
            roomSize: {
                S: [9, 15],
                M: [15, 20],
                L: [20, 25],
                XL: [25, 30],
                XXL: [30, -1],
            }
        }
    },
    'cuisine': {
        name: 'Cuisine',
        roomType: 'interieur',
    },
    'bureau': {
        name: 'Bureau',
        roomType: 'interieur',
        personalized: {
            roomSize: {
                S: [3, 6],
                M: [6, 10],
                L: [10, 14],
                XL: [14, 18],
                XXL: [18, -1],
            }
        }
    },
    'chambre': {
        name: 'Chambre',
        roomType: 'interieur',
        personalized: {
            roomSize: {
                S: [9, 12],
                M: [12, 15],
                L: [15, 18],
                XL: [18, 25],
                XXL: [25, -1],
            }
        }
    },
    'suite_parentale': {
        name: 'Suite parentale',
        roomType: 'interieur',
    },
    'sellier': {
        name: 'Sellier',
        roomType: 'interieur',
    },
    'buanderie': {
        name: 'Buanderie',
        roomType: 'interieur',
    },
    'salle_a_manger': {
        name: 'Buanderie',
        roomType: 'interieur',
        personalized: {
            roomSize: {
                S: [9, 13],
                M: [13, 16],
                L: [16, 19],
                XL: [19, 23],
                XXL: [23, -1],
            }
        }
    },
    'personnalise': {
        name: 'Personnalisé',
        roomType: 'interieur',
    },

    // ANNEXES
    'garage': {
        name: 'Garage',
        roomType: 'annexe',
        personalized: {
            roomSize: {
                S: [9, 15],
                M: [15, 20],
                L: [20, 30],
                XL: [30, 50],
                XXL: [50, -1],
            }
        }
    },
    'veranda': {
        name: 'Véranda',
        roomType: 'annexe',
    },
    'poll_house': {
        name: 'Pool-house',
        roomType: 'annexe',
    },
    'dependance': {
        name: 'Dépendance',
        roomType: 'annexe',
    },
    'cave': {
        name: 'Cave',
        roomType: 'annexe',
        personalized: {
            roomSize: {
                S: [3, 6],
                M: [6, 9],
                L: [9, 12],
                XL: [12, 15],
                XXL: [15, -1],
            }
        }
    },


    // EXTERIEUR 
    'place_parking': {
        name: 'Place de parking',
        roomType: 'exterieur',
    },
    'piscine': {
        name: 'Piscine',
        roomType: 'exterieur',
    },
    'balcon': {
        name: 'Balcon',
        roomType: 'exterieur',
    },
    'puit': {
        name: 'Puit',
        roomType: 'exterieur',
    },
    'vis_a_vis': {
        name: 'Vis à vis',
        roomType: 'exterieur',
    },
    'terrain': {
        name: 'Terrain',
        roomType: 'exterieur',
    },
    'terrasse': {
        name: 'Terrasse',
        roomType: 'exterieur',
        onlyFrom: ['appartment'],
    },
    'balcon': {
        name: 'Balcon',
        roomType: 'exterieur',
        onlyFrom: ['appartment'],
    },


    // ENVIRONNEMENT
    'service_civique': {
        name: 'Service civique',
        roomType: 'environnement',
    },
    'ecole': {
        name: 'École',
        roomType: 'environnement',
    },
    'supermarche': {
        name: 'Supermarché',
        roomType: 'environnement',
    },
    'transport': {
        name: 'Transport',
        roomType: 'environnement',
    },
    'lieu_de_travail': {
        name: 'Proximité lieu de travail',
        roomType: 'environnement',
    },
    'sante': {
        name: 'Santé',
        roomType: 'environnement',
    },
    'loisir': {
        name: 'Loisir',
        roomType: 'environnement',
    },
}

const accessoires = {
    'cheminee': {
        name: 'Cheminée',
        allowed: ['sejour']
    },
    'poele': {
        name: 'Poêle',
        allowed: ['sejour']
    },
    'radiateur': {
        name: 'Radiateur',
        allowed: ['sejour']
    },
    'clim': {
        name: 'Climatisation',
        allowed: ['sejour']
    },
    'poutre': {
        name: 'Poutre apparante',
        allowed: ['sejour']
    },
    'menuiseries': {
        name: 'Menuiseries',
        allowed: ['sejour']
    }
} 

const template = {
    'appartment': {
        TypeName: 'Appartement',
        PrefixName: 'un',
        backgroundImageUrl: 'https://cdn.pixabay.com/photo/2013/08/29/02/45/building-176932_1280.jpg',
        SubTypeList: {
            'studio': {
                name: 'Appartement studio',
                size_m2: [9, 15], 
                rooms: ['sejour', 'salle_de_bain', 'toilette', 'cuisine', 'balcon'],
            },
            'two': {
                name: 'Appartement pour deux',
                size_m2: [20, 35],
                rooms: ['sejour', 'salle_de_bain', 'toilette', 'place_parking'],
            },
            'family': {
                name: 'Appartement familliale',
                rooms: ['sejour', 'salle_de_bain', 'toilette', 'place_parking'],
            },
            'duplex': {
                name: 'Appartement duplex',
                rooms: ['sejour', 'bath', 'toilette', 'place_parking'],
            }
        }
    },
    'maison': {
        TypeName: 'Maison',
        PrefixName: 'une',
        backgroundImageUrl: 'https://cdn.pixabay.com/photo/2016/09/23/16/43/alley-1690053_1280.jpg',
        SubTypeList: {
            'maison': {
                name: 'Maison',
            },
            'villa': {
                name: 'Villa',
            },
            'maison_city': {
                name: 'Maison de ville',
            },
            'maison_campaign': {
                name: 'Maison de campagne',
            },
        }
    }
}

export { accessoires, rooms }