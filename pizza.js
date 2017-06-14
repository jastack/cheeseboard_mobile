import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Pizza extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text>Changes you make will automatically reload.</Text>
      </View>
    );
  }
}
