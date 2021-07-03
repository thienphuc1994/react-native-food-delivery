import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const BigTitle = (props: Props) => {
  const {children} = {...props};
  return (
    <Text style={styles.bigTitle} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '500',
    color: '#4F585E',
  },
});

export default BigTitle;
