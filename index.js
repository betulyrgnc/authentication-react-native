import { AppRegistry } from 'react-native';
import firebase from 'firebase';

import App from './App';


const config = {
    apiKey: "AIzaSyCDfeNSO0Hcq8PUj1pxAZHT5Hoy9u58QSc",
    authDomain: "kimlik-dogrulama-d2a91.firebaseapp.com",
    databaseURL: "https://kimlik-dogrulama-d2a91.firebaseio.com",
    projectId: "kimlik-dogrulama-d2a91",
    storageBucket: "kimlik-dogrulama-d2a91.appspot.com",
    messagingSenderId: "356955603789"
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent('kimlikDogrulama', () => App);
