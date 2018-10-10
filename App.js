/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './src/ortak/Header';
import LoginForm from './src/LoginForm';


export default class App extends Component {
render() {
    return (
      <View>
        <Header headerText="Giriş ekranı" />
        <LoginForm />
      </View>
    );
  }
}
