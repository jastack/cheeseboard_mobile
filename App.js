import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
    return (
      <View style={styles.container}>
        <Image source={require('./logo.jpeg')}
           style={{width: 300, height: 100}}/>
         <Text style={styles.header}>Today's Pizza!!!</Text>
        <Pizza type={this.state.pizza}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6F9FD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontWeight: 'bold',
    marginTop: 20
  },


});
