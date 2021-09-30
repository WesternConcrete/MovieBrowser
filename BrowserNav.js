import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from "react-navigation-stack";

import {createAppContainer} from 'react-navigation';

import Browse from "./Browse"
import Movie from "./MovieDetails"
import Search from "./Search"

const BrowserSwitch = createStackNavigator(
	{
		Browse: {screen: Browse},
		Movie: {screen: Movie}
	},
)

const BrowserNav = createAppContainer(BrowserSwitch)

// BrowserNav.navigationOptions = {
// 			headerTransparent: true,
// 			headerTitle: '',
// 		}

export default BrowserNav



