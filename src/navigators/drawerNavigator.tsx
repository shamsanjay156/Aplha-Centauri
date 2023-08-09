/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomNavigator} from './bottomNavigator';
import {ChangePassword} from '../screens';
import {DrawerContent} from '../components/DrawerContent';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export type DrawerRouteParams = {
  navigate(arg0: string): void;
  Bottom: undefined;
  ChangePassword: undefined;
};
export const DrawerNavigator: React.FC = () => {
  const Drawer = createDrawerNavigator<DrawerRouteParams>();
  const navigation = useNavigation<DrawerRouteParams>();

  return (
    <Drawer.Navigator
      // screenOptions={{swipeEnabled: true}}
      initialRouteName="Bottom"
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Bottom"
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="left"
                size={20}
                onPress={() => navigation.navigate('Bottom')}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};
