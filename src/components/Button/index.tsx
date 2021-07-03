import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Button = (props: Props) => {
  const {children, style, ...rest} = {...props};

  const styleOfRoot = [styles.root, StyleSheet.flatten([style])];
  return (
    <TouchableOpacity activeOpacity={0.7} style={styleOfRoot} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FB6D3B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
});

export default Button;
