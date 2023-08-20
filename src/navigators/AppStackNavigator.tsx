import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';
import { Routes } from './ROUTES';

const Stack = createStackNavigator();

export const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.HOME}>
      <Stack.Screen
        name={Routes.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
