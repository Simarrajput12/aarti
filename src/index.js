/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  LogBox
} from 'react-native';
import Navigator from './config/navigator';
import SplashScreen from "react-native-splash-screen";
import messaging from '@react-native-firebase/messaging';
LogBox.ignoreAllLogs();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    SplashScreen.hide();
    this.requestUserPermission();
  }

  async requestUserPermission() {
    const permission = await messaging().requestPermission();

    if (await permission) {
      console.log('got permission', permission);
      const token = await messaging().getToken();
      console.log('token', token);
    }
  }

  onRegister(token) {
    this.setState({ registerToken: token.token, fcmRegistered: true });
  }

  onNotif(notif) {
    Alert.alert(notif.title, notif.message);
  }

  handlePerm(perms) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }

  render() {
    return (
      <Navigator />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
