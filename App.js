import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import Pizza from './pizza.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {pizza: "", text: ""};
    this.displayPizza = this.displayPizza.bind(this);
    this.pizzaArray = this.pizzaArray.bind(this);
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

  searchPizza(text){
    const string = text;
    const address = 'http://cheeseboardapi.herokuapp.com/pizzas/' + string;
    fetch(address)
     .then(response => response.json())
     .then(responsedata => {
      this.setState({pizza: responsedata});
    });
  }

  componentDidMount(){
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

  displayPizza(){
    if (this.state.pizza === ""){
      return (<Text>Still loading...</Text>);
    } else {
      return (this.state.pizza.map(
        pizza => <Pizza key={pizza.id} type={pizza.pizza_type} date = {pizza.date} />
      ));
    }
  }

  pizzaArray(text){
    this.setState({text: text});
    this.searchPizza(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./logo.jpeg')}
           style={{width: 300, height: 100}}/>
         <TextInput
          style={{height: 40}}
          placeholder="Type ingredients here!"
          onChangeText={(text) => this.pizzaArray(text)}
           />
         <Text style={styles.header}>Pizzas:</Text>
         <ScrollView>
           {this.displayPizza()}
         </ScrollView>
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
