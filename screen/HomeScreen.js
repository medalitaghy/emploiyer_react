
import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ItemList from './ItemList'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
        listData:[],
        idEdit:null,
    };
    this.url = "http://localhost:8888/gestionEmp/societe.php";
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

  render(){

  return (
    <View style={styles.container}>

    <View style={{height:"80%", marginTop:20}}>
    <ItemList items={this.state.listData} />
    </View>

    </View>
  )

  }

  
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    //alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  
})