import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pizza from './pizza.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {pizza: "Not loaded yet"};
  }

  getPizza(){
    const date = this.currentDate();
    fetch('http://cheeseboardapi.herokuapp.com/pizzas')
    .then(response => response.json())
    .then(responsedata => {
      this.findPizza(responsedata, date);
      const firstPizza = responsedata[1].date;
    });
  }

  componentDidMount(){
    this.getPizza();
    const date = this.currentDate();
  }

  currentDate(){
    const date = new Date();
    const year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    const day = date.getDate();
    const str = year + "-" + month + "-" + day;
    return str;
  }

  findPizza(pizzaArray, date){
    const pizza = "";
    for (var i = 0; i < pizzaArray.length; i++) {
      if (pizzaArray[i].date === date) {
        this.setState({pizza: pizzaArray[i].pizza_type});
      }
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Today's Pizza!!!</Text>
        <Pizza type={this.state.pizza}/>
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
