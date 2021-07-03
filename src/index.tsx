import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabNavigator from './navigation/TabNavigatior';

interface Props {}

const App = (props: Props) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
