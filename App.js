/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
// import Splash from './Splash';
import Routes from './src/Routes';


export default class App extends Component {
  render() {
    return (
        <Routes/>
    );
  }
}
