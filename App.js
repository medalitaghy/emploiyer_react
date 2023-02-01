import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator() ; 


export default function App() {

  return (
    <NavigationContainer  >
        <Stack.Navigator initialRouteName='Login' >

      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
    </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});