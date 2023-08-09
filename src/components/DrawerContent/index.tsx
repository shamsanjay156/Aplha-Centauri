import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
console.log('dimensions', height, width, width / 2);
export const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: backgroundStyle.backgroundColor,
        paddingTop: 0,
        marginTop: -4,
      }}>
      <View style={{...styles.head, backgroundColor: '#6200ee'}}>
        <Text style={styles.welcome}>Welcome Buddy</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ChangePassword')}>
          <Text style={{...styles.text, color: backgroundStyle.color}}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  head: {
    width: '100%',
    height: 150,
    padding: 10,
  },
  welcome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});
