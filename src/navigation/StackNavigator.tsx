import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

interface Props {}

const Stack = createStackNavigator();

export const SCREENS = {
  HOME: {
    name: 'HomeScreen',
    component: HomeScreen,
  },
};

const StackNavigator = (props: Props) => {
  return (
    <Stack.Navigator headerMode="none">
      {Object.keys(SCREENS).map((key: string) => {
        const item = SCREENS[key];
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
