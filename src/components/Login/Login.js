import React, {Component} from 'react';
import { StyleSheet, Text,Image,TextInput ,Button, View , KeyboardAvoidingView ,TouchableOpacity } from 'react-native';
import {AppRegistry} from 'react-native';
import Form from './Form';
import Logo from './Logo';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {


  signup(){
    Actions.signup();
  }


  render() {
     return (
      <KeyboardAvoidingView behavior="padding" style={styles.login}>
        <View style={styles.logo_container}>
          <Logo/>
          <Text style={styles.text_template}>Bu uygulama React-Native kullanılarak yapılmıstır.</Text>
        </View>
        <View style={styles.form_container}>
          <Form type='Login'/>
        </View>
        <View style={styles.logo_container}>
          <TouchableOpacity onPress={this.signup} style={styles.button_container}><Text style = {styles.buttonText}>Sign Up</Text></TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#ba68c8'
  },
  text_template:{
    color: 'white',
    marginTop: 50,
    width: 250,
    textAlign: 'center',
    opacity: 0.75,
    marginHorizontal: 40,
  },
  form_container:{
    padding: 20,
  },
  logo_container:{
    padding: 50,
  },
  input:{
    height: 40,
    backgroundColor: '#e1bee7',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10,
  },
  button_container:{
    backgroundColor: '#263238',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
  buttonText:{
    textAlign: 'center',
    color: '#f3e5f5',
    fontWeight: '700',
  }

});
