import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../containers/Home';
import Aarti from '../containers/aarti';
import More from '../containers/More';


const stackNavigatorConfiguration = {
  headerShown: false,
  mode: 'card',
  navigationOptions: { gesturesEnabled: false },
};

export const Stack = createNativeStackNavigator();

class navigator extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={stackNavigatorConfiguration}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Aarti" component={Aarti} />
          <Stack.Screen name="More" component={More} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default navigator;
