import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pizza from './pizza.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  getPizza(){
    fetch('http://cheeseboardapi.herokuapp.com/pizzas')
    .then(response => response.json())
    .then(responsedata => {
      console.log(responsedata.pizza_type);
    });
  }

  render() {
    this.getPizza();
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Pizza />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
