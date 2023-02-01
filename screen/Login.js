import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import  { Component } from 'react';


class  Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
        listData:[],
        idEdit:null,
    };
    this.url = "http://localhost:8888/gestionEmp/api.php";
  }
  componentDidMount(){
    this.ambilListData()
}
async ambilListData(){
  await fetch(this.url)
  .then((response)=>response.json())
  .then((json)=>{
      console.log('les donnes : '+JSON.stringify(json.data.result));
      this.setState({listData:json.data.result});
  })
  .catch((error)=>{
      console.log(error);
  })
}
handalLogin(){
  
  this.state.listData.forEach(element => {
    console.log(element)
    if(this.state.email === element.email && this.state.password === element.password    ){
      console.log("connect")
    }
  });
}

render(){

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.setState({email:text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.setState({password:text})}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={this.handalLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

}

export default Login

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical:10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})