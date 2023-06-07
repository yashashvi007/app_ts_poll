import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Details from './Details';

type MyProps ={
}

type MyState = {
}

type RootStackParamList = {
  Home : undefined , 
  Details : {
    id : string
  } 
}

const Stack = createStackNavigator<RootStackParamList>()

class App extends React.Component<MyProps , MyState> {
  constructor(props : MyProps){
    super(props);
    
  }

  render() {
    return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name='Home' component={Home} />
         <Stack.Screen name='Details' component={Details} />
       </Stack.Navigator>
     </NavigationContainer>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
