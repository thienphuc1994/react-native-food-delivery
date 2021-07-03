import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  style: [];
}

const FundooTextInput = (props: Props) => {
  const {style: customStyles, ...rest} = {...props};

  return (
    <TextInput
      style={[styles.textInput, StyleSheet.flatten([customStyles])]}
      placeholderTextColor="#9b9b9b"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbdfe3',
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 20,
    color: '#9b9b9b',
  },
});

export default FundooTextInput;
