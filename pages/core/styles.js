
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { InputProperties, TitleProperties, ButtonProperties } from './properties.js';
import React, { useRef } from 'react';



export const Title = ({ size, title = "", properties={} }) => (
    <Text style={{...TitleProperties[size], ...properties}}>{title}</Text>
)

export const Input = ({ placeholder, properties = {}, autoComplete = "off", onchange = null}) => {
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
          onChangeText={onchange}
          style={{ ...properties, ...InputProperties.input }}
        />
      </TouchableOpacity>
    );
};

export const Button = ({ title, redirect = null}) => (
  <TouchableOpacity
    style={ButtonProperties.button}
    onPress={() => redirect  ? (redirect.navigate ? redirect.navigate(redirect.page) : redirect()) : null}
  >
    <Text style={ButtonProperties.buttonText}>{title}</Text>
  </TouchableOpacity>
);
