import React, {Component} from 'react';
import { StyleSheet, Text , TextInput , Image , View , TouchableOpacity }  from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Form extends Component {

list(){
  Actions.gotolist();
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="e-mail"
          placeholderTextColor="#f3e5f5"
          returnKeyType="Next"
          onSubmitEditing={() => this.passwordInput.focus()}
          KeyboardType="e-mail-address"
          actualCapitalize="none"
          autoCorrext={false}
          style = {styles.input}/>
        <TextInput
          placeholder="password"
          placeholderTextColor="#f3e5f5"
          returnKeyType = "Go"
          secureTextEntry
          ref={(input) => this.passwordInput = input}
          style = {styles.input}/>

        <TouchableOpacity onPress={this.list} style={styles.button_container}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  input:{
    height: 40,
    backgroundColor: '#e1bee7',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  button_container:{
    paddingVertical: 10,
    backgroundColor: '#512da8',
    borderRadius: 10,
  },
  buttonText:{
    textAlign: 'center',
    color: '#f3e5f5',
    fontWeight: '700',
  }

});
