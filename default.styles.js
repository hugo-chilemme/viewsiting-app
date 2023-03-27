
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useRef } from 'react';

const TitleProperties = [
    {fontSize: 24, fontWeight: 'bold'},
    {fontSize: 22, fontWeight: 'bold'},
    {fontSize: 20, fontWeight: 'bold'},
    {fontSize: 18, lineHeight: 30, color: '#707070'},
    {fontSize: 16, lineHeight: 30, color: '#707070'},
    {fontSize: 14, lineHeight: 30, color: '#707070'}
]


export const ButtonProperties = {
  button: {
    position: 'absolute',
    bottom: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    width: '100%',
    backgroundColor: '#1A58A2',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
  },
}


const InputProperties = {
   element: {
    marginTop:45,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F9F9F9'
   },
   label: {
    fontSize: 14,
    color: '#808080',
   },
   input: {
    borderWidth: 0,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:5,
    borderRadius: 10,
    color:'#202020',
   },
}

export const Title = ({ size, title = "", properties={} }) => (
    <Text style={{...properties, ...TitleProperties[size]}}>{title}</Text>
)

export const Input = ({ placeholder, properties = {}, autoComplete = "off" }) => {
    const inputRef = useRef(null);
  
    const handlePress = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <TouchableOpacity style={InputProperties.element} onPress={handlePress}>
        <Text style={InputProperties.label}>{placeholder}</Text>
        <TextInput inputMode={autoComplete} 
          ref={inputRef}
          style={{ ...properties, ...InputProperties.input }}
        />
      </TouchableOpacity>
    );
};
