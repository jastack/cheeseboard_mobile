import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pizza from './pizza.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {pizza: "Not loaded yet"};
  }

  getPizza(){
    fetch('http://cheeseboardapi.herokuapp.com/pizzas')
    .then(response => response.json())
    .then(responsedata => {
      const firstPizza = responsedata[0].pizza_type;
      console.log(firstPizza);
    });
  }

  componentDidMount(){
    this.getPizza();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Pizza type={this.state.pizza}/>
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
