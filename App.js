/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { HomePage } from './src/pages/Home.js';
import { FlatlistPage } from './src/pages/Flatlist.js';
import { ModalPage } from './src/pages/Modal.js';
import { ProgressBarPage } from './src/pages/ProgressBar';

const Pages = createStackNavigator({
  ProgressBar: {
    screen: ProgressBarPage
  },
  Home: {
    screen: HomePage
  },
  Flatlist: {
    screen: FlatlistPage
  },
  Modal: {
    screen: ModalPage
  },

});


class App extends Component<{}> {
  render() {
    return (
      <Pages />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default createAppContainer(Pages);