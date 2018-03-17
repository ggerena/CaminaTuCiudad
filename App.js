/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      TextInputValueHolder: 'texto'
    }
  }

  sendToServer(){
    alert(this.state.TextInputValueHolder)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{height: 80, width: 200, borderColor: 'black', borderWidth: 1}} onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})}/>
        <Button title="ENVIAR" accessibilityLabel="Envia text y posicion al backend" onPress={() => this.sendToServer()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
