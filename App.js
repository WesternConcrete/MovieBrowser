import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import {createAppContainer} from 'react-navigation';

import BrowsePage from "./BrowserNav"
import Search from "./Search"

const AppStack = createAnimatedSwitchNavigator({
  BrowsePage: {screen: BrowsePage},
  Search: {screen: Search}
})

const App = createAppContainer(AppStack)

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});