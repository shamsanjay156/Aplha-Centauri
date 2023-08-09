import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen, RegisterScreen} from '../screens';
import {DrawerNavigator} from './drawerNavigator';

export type RootRouteParams = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
};
export const RootNavigator = () => {
  const Stack = createStackNavigator<RootRouteParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Dashboard"
          component={DrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
