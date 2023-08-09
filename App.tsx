/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  // StatusBar,
  useColorScheme,
  View,
  PermissionsAndroid,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import messaging from '@react-native-firebase/messaging';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import {RootNavigator} from './src/navigators/rootStackNavigator';
import {AppStatusBar} from './src/components/AppStatusBar';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
  const displayNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
    });
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        visibility: AndroidVisibility.PUBLIC,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async () => {
      await displayNotification();
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    messaging().registerDeviceForRemoteMessages();
    messaging()
      .getToken()
      .then(fcmToken => {
        console.log('FCM Token -> ', fcmToken);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <AppStatusBar
        props={{
          barStyle: isDarkMode ? 'light-content' : 'dark-content',
        }}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          flex: 1,
        }}>
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
