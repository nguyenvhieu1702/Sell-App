import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputText = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default InputText;
