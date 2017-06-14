import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Pizza extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text>{this.props.type}</Text>
      </View>
    );
  }
}
