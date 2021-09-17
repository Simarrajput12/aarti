import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../containers/Home';
import { ArtiList, AudioPlayer } from '../containers/aarti'
import More from '../containers/More';
import VideoPlayer from '../containers/videos/videoPlayer';
import VideoList from '../containers/videos/videoList';
import PrivacyPolicy from '../containers/PrivacyPolicy';
import AboutUs from '../containers/AboutUs';
import TermsCondition from '../containers/TermsCondition';
import PushNotification from 'react-native-push-notification'


const stackNavigatorConfiguration = {
  headerShown: false,
  mode: 'card',
  // navigationOptions: { gesturesEnabled: false },
};

export const Stack = createNativeStackNavigator();

class navigator extends React.Component {
  constructor(props){
  super(props);
  PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification)
    },
  
    popInitialNotification: true,
    requestPermissions: true
  })
}
componentWillMount(){
  this.scheduleNotif();
}
componentDidMount(){
  this.scheduleNotif();
}

scheduleNotif(soundName) {
  this.lastId++;
  PushNotification.localNotificationSchedule({
    date: new Date(Date.now() + 100 * 1000), // in 30 secs
    foreground: true,
    repeatType: 'time',
    repeatTime: 1 ,
    /* Android Only Properties */
    channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
    ticker: 'My Notification Ticker', // (optional)
    autoCancel: true, // (optional) default: true
    largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
    smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
    bigText: 'Aarti Notification Message', // (optional) default: "message" prop
    subText: 'This is reminder message',
    color: 'blue', // (optional) default: system default
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    tag: 'some_tag', // (optional) add tag to message
    group: 'group', // (optional) add group to message
    groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
    ongoing: false, // (optional) set whether this is an "ongoing" notification
    actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
    invokeApp: false, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

    when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
    usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
    timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
    /* iOS only properties */
    category: '', // (optional) default: empty string
    allowWhileIdle:true,
    /* iOS and Android properties */
    id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
    title: 'Aarti Notification', // (optional)
    message: 'Aarti Notification Message', // (required)
    userInfo: { sceen: "home" }, // (optional) default: {} (using null throws a JSON value '<null>' error)
    playSound: !!soundName, // (optional) default: true
    soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
  });
}



  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={stackNavigatorConfiguration}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ArtiList" component={ArtiList} />
          <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
          <Stack.Screen name="More" component={More} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
          <Stack.Screen name="VideoList" component={VideoList} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="TermsCondition" component={TermsCondition} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default navigator;
