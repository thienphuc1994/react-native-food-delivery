import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LoginScreen from '../LoginScreen';

interface Props {}

const Root = (props: Props) => {
  const insets = useSafeAreaInsets();
  const paddingBottom = Math.max(insets.bottom, 16);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <ScrollView>
        <View style={{height: insets.top}} />
        <LoginScreen />
        <View
          style={{
            paddingBottom,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Root;
