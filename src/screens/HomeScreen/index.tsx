import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {}

const HomeScreen = (props: Props) => {
  const insets = useSafeAreaInsets();
  const paddingBottom = Math.max(insets.bottom, 16);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <ScrollView>
        <View style={{height: insets.top}} />
        <View>
          <Text>Home Screen</Text>
        </View>
        <View
          style={{
            paddingBottom,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
