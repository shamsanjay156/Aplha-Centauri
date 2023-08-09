import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {commonStyle} from '../../../common/commonStyle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootRouteParams} from '../../../navigators/rootStackNavigator';

interface ScreenProps {
  navigation: StackNavigationProp<RootRouteParams, 'Login'>;
  route: RouteProp<RootRouteParams, 'Login'>;
}

export const LoginScreen: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <View style={commonStyle.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
