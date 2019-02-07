import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';



export default class Splash extends Component {
  render() {
    return (
      <View style={styles.splash}>
        <View style={styles.splash_title}>
          <Text style={styles.title}>Welcome to React Native!</Text>
        </View>
        <View>
          <Text style={styles.by}>Coded by s.A.s</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00838f',
  },
  title:{
    color: '#ffe082',
    fontSize: 30,
    fontWeight: 'bold',
  },
  by:{
    color: 'white',
    fontSize: 15,
    fontWeight: '200',
    paddingBottom: 10,
  },
  splash_title:{
    justifyContent: 'center',
    flex: 1,
  }

});
