/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NotificationScreen, ProfileScreen} from '../screens';
import {HomeStack} from './homeStack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import {DrawerRouteParams} from './drawerNavigator';
import {CartScreen} from '../screens/cartScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import useTheme from '../utils/themeProvider';

interface DrawerScreenProps {
  navigation: DrawerNavigationProp<DrawerRouteParams, 'Bottom'>;
  route: RouteProp<DrawerRouteParams, 'Bottom'>;
}
export type TabRouteParams = {
  Home: undefined;
  Notification: undefined;
  Profile: undefined;
  Cart: undefined;
};
export const BottomNavigator: React.FC<DrawerScreenProps> = () => {
  const Tab = createBottomTabNavigator<TabRouteParams>();
  const {themeProvider} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: themeProvider.backgroundColor,
        tabBarInactiveBackgroundColor: themeProvider.backgroundColor,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="shoppingcart" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <IonicIcon name="notifications" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="profile" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
