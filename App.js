/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import Header from './src/ortak/Header';
import LoginForm from './src/LoginForm';
import Button from './src/ortak/Button';
import CardSection from './src/ortak/CardSection';
import Spinner from './src/ortak/Spinner';


export default class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) { // eger bir kullanıcı varsa kullanıcı login durumunu set et.
        this.setState({ loggedIn: true }); //daha önceden login olduysa.
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  clickLogout() {
    firebase.auth().signOut();
  }
    renderContent() {
      switch (this.state.loggedIn) {
        case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
          </CardSection>
        );
        case false:
        return (
          <LoginForm />
        );
        default:
        return (
          <View>
          <Spinner size="large" />
          </View>
        );
      }
    }
    render() {
        return (
          <View>
            <Header headerText="Giriş ekranı" />
            {this.renderContent()}
          </View>
        );
      }
    }
