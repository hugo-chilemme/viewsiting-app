export const ButtonProperties = {
    button: {
        position: 'absolute',
        bottom: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '100%',
    },
    buttonAbsolute: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        width: '100%',
        backgroundColor: '#1A58A2',
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    buttonTextDisabled: {
        color: '#909090',
        width: '100%',
        backgroundColor: '#F9F9F9',
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        textAlign: 'center',
    },
}

export const InputProperties = {
    element: {
        marginTop: 45,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#eee'
    },
    label: {
        fontSize: 14,
        color: '#808080',
    },
    selector: {
        display: "flex",
        width: '100%',
        flexDirection: "row",
        marginTop:20,
    },
    selectorItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
    },
    selectorActive: {
        backgroundColor: '#1A58A250',
        borderRadius: 5
    },
    input: {
        borderWidth: 0,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        borderRadius: 10,
        color: '#202020',
    },
}

export const TitleProperties = [
    {fontSize: 26, fontWeight: 'bold'},
    {fontSize: 24, fontWeight: 'bold'},
    {fontSize: 22, fontWeight: 'bold'},
    {fontSize: 20, lineHeight: 30, color: '#101010'},
    {fontSize: 18, lineHeight: 30, color: '#202020'},
    {fontSize: 16, lineHeight: 30, color: '#707070'},
    {fontSize: 14, lineHeight: 30, color: '#808080'},
    {fontSize: 12, lineHeight: 30, color: '#909090'}
]


export const NavbarProperties = {
    view: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 65,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#202020',
        elevation: 50,
    },
    item: {
        flex: 1,
        padding:20,
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 18,
        marginTop: 0
    }
}

let SelectorProperties = {
    element: {
        marginTop: 25,    
    },
    button: {
        width: "100%",
        color:'#000',
        marginTop: 15,  
        borderRadius: 10,
        padding:20,
        borderWidth: 2,
        borderColor: "transparent",
        backgroundColor: '#eee',
    },
   
    buttonText: {
        fontSize: 16,
    }
}
SelectorProperties.buttonActive = {...SelectorProperties.button, ...{
    borderColor: "#1A58A2",
}}




exports.SelectorProperties = SelectorProperties;
