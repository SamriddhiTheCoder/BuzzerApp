import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import AppHeader from './AppHeader';
import igScreen from './screens/igScreen';
import fbScreen from './screens/fbScreen';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppHeader/>
      
      <AppContainer/>
    </View>
  );
  }
}

const tabNavigator = createBottomTabNavigator({
  FaceBook: fbScreen,
  InstaGram: igScreen,
})

const AppContainer = createAppContainer(tabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0faff',
  },
});
