import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeadder from './screens/AppHeadder';
import Scanner from './screens/ScanScreen';

export default class App extends React.Component {
  render(){
  return (
    <View>
    <AppHeadder/>
    <Scanner/>
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