/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import 'react-native-gesture-handler';

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
messaging().setBackgroundMessageHandler(async remoteMessage => {
  displayNotification();
});
//notifee background handler need to be configured
AppRegistry.registerComponent(appName, () => App);
