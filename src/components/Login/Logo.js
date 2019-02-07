import React, {Component} from 'react';
import { StyleSheet, Text , View , Image } from 'react-native';

export default class Logo extends Component {

  render(){
    return(
      <View style={styles.logo_container}>
      <Image
        style={styles.logo}
        source={require('../../image/profile.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
    width: 100,
    height: 100,
  },
  logo_container:{
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  });
