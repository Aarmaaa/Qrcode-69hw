import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeadder extends React.Component {
 
    render(){
    return (
    <View style={styles.container}>
      <Text style={styles.text}>QR Scanner</Text>
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
  text:{
      backgroundColor:"red",
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10,
      marginRight:10,
      fontSize:30,
      fontFamily:"Courier New",
      borderWidth:1,
      flex:1,
      
  }
});
