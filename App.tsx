/* eslint-disable @typescript-eslint/no-unused-vars */
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
  EventType,
} from '@notifee/react-native';
import {RootNavigator} from './src/navigators/rootStackNavigator';
import {AppStatusBar} from './src/components/AppStatusBar';
import RNBootSplash from 'react-native-bootsplash';

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
    PermissionsAndroid.check('android.permission.POST_NOTIFICATIONS').then(
      res => {
        console.log('response', res);
      },
    );
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async message => {
      console.log('message......', message);
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
  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage,
          );
        }
      });
  }, []);
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 1000});
  }, []);
  return (
    <SafeAreaProvider>
      <AppStatusBar />
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
