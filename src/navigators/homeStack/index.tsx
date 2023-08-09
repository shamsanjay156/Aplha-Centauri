/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabRouteParams} from '../bottomNavigator';
import {useColorScheme} from 'react-native';

interface Props {
  navigation: BottomTabNavigationProp<TabRouteParams, 'Home'>;
}
export type HomeRouteParams = {
  HomeScreen: undefined;
};
export const HomeStack: React.FC<Props> = ({navigation}) => {
  const Stack = createStackNavigator<HomeRouteParams>();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {backgroundColor: isDarkMode ? Colors.darker : '#047BD5'},
        headerTitleStyle: {color: 'white'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                size={25}
                onPress={() =>
                  navigation.dispatch(() => DrawerActions.openDrawer())
                }
                color="white"
                style={{marginLeft: 10}}
              />
            );
          },
          headerTitle: 'Home',
        }}
      />
    </Stack.Navigator>
  );
};
