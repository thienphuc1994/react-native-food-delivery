import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getBaseHeight, getBaseWidth} from '../../helpers/responsiveHelper';
import BigTitle from '../BigTitle';
import Button from '../Button';
import TextInput from '../TextInput';

interface Props {}

const LoginScreen = (props: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.navContainer}>
        <Text>Back Button</Text>
      </View>
      <View style={styles.headerContainer}>
        <BigTitle>Sign In</BigTitle>
        <Text style={styles.dontHaveAccount}>
          Don’t have an account? <Text style={styles.link}>Sign up now!</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email or Phone Number" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
      <View style={styles.actionContainer}>
        <Button>SIGN IN</Button>
        <Text style={styles.or}>OR</Text>
        <Button style={styles.facebook}>Continue with facebook</Button>
        <Button style={styles.google}>Continue with Google</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: getBaseWidth(24),
  },
  navContainer: {
    marginTop: getBaseHeight(28),
  },
  headerContainer: {
    marginTop: getBaseHeight(56),
  },
  inputContainer: {
    marginTop: getBaseHeight(32),
  },
  actionContainer: {
    marginTop: getBaseHeight(24),
  },
  dontHaveAccount: {
    marginTop: getBaseHeight(16),
  },
  link: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
    color: '#FB6D3B',
  },
  input: {
    marginTop: getBaseHeight(16),
  },
  forgotPassword: {
    marginTop: getBaseHeight(16),
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 18,
    color: '#4F585E',
  },
  or: {marginTop: getBaseHeight(24)},
  facebook: {marginTop: getBaseHeight(24), backgroundColor: '#4460A0'},
  google: {marginTop: getBaseHeight(16), backgroundColor: '#4285F4'},
});

export default LoginScreen;
