import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {commonStyle} from '../../common/commonStyle';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeRouteParams} from '../../navigators/homeStack';
import useTheme from '../../utils/themeProvider';
import {AppStatusBar} from '../../components/AppStatusBar';

interface ScreenProps {
  navigation: StackNavigationProp<HomeRouteParams, 'HomeScreen'>;
  route: RouteProp<HomeRouteParams, 'HomeScreen'>;
}
export const HomeScreen: React.FC<ScreenProps> = () => {
  const {themeProvider} = useTheme();
  const styles = StyleSheet.create({
    text: {
      color: themeProvider.color,
    },
  });
  return (
    <>
      <AppStatusBar backgroundColor="#047BD5" />
      <View
        style={{
          ...commonStyle.container,
          backgroundColor: themeProvider.backgroundColor,
        }}>
        <Text style={styles.text}>Home</Text>
      </View>
    </>
  );
};
