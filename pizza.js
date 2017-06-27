import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Pizza extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text style={styles.pizza}>{this.props.date}</Text>
        <Text style={styles.pizza}>{this.props.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  pizza: {
    flex: 0,
    margin: 20
  }
});
