import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Constants from '../constants';
import { Header } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  buttonView: {
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 80,
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Constants.BaseStyle.DEVICE_WIDTH / 100 * 5
  }
})

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header onPressLeft={() => navigate('More')} leftIcon={Constants.Images.More} showLeftIcon={true} title='Home' />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => navigate('Aarti')}>
            <Text>Aarti</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <Text>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <Text>15 Min OM Meditation</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
  }
}



export default Home;