import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../components/Icon';
import HomeTab from '../screens/HomeTab';
import OrderTab from '../screens/OrderTab';
import SavedTab from '../screens/SavedTab';
import UserProfileTab from '../screens/UserProfileTab';

interface Props {}

const Tab = createBottomTabNavigator();

export const TABS = {
  HOME: {
    name: 'HomeTab',
    component: HomeTab,
    icon: 'home',
  },
  ORDER: {
    name: 'OrderTab',
    component: OrderTab,
    icon: 'wallet',
  },
  SAVED: {
    name: 'SavedTab',
    component: SavedTab,
    icon: 'heart',
  },
  USER_PROFILE: {
    name: 'UserProfileTab',
    component: UserProfileTab,
    icon: 'user',
  },
};

const TabNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, ...rest}) => {
          const {name} = route;
          const item = Object.keys(TABS)
            .map(key => TABS[key])
            .find(x => x.name === name);
          let iconName = item.icon;
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      {Object.keys(TABS).map((key: string) => {
        const item = TABS[key];
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
