import React, { type FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '@/components';
import { HomeScreen } from '@/screens';
import { colors } from '@/theme';

import BottomTabNavigator from './BottomTabNavigator';
import { Routes } from './ROUTES';

const Drawer = createDrawerNavigator();

export const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.white,
        drawerLabelStyle: {
          marginLeft: -20
        }
      }}>
      <Drawer.Screen
        name={Routes.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({ color }) => <Icon name="home-sharp" size={18} color={color} />
        }}
      />
      <Drawer.Screen
        name={Routes.WALLET_DRAWER}
        component={HomeScreen}
        options={{
          title: 'Wallet',
          drawerIcon: ({ color }) => <Icon name="wallet" size={18} color={color} />
        }}
      />
      <Drawer.Screen
        name={Routes.NOTIFICATIONS_DRAWER}
        component={HomeScreen}
        options={{
          title: 'Notifications',
          drawerIcon: ({ color }) => <Icon name="notifications" size={18} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
