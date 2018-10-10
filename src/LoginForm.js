import React, { Component } from 'react';
import { TextInput } from 'react-native';
import firebase from 'firebase';
import Button from './ortak/Button';
import Card from './ortak/Card';
import CardSection from './ortak/CardSection';

 class LoginForm extends Component {
   state ={ email: '', password: '' };
   clickLogin() {
     //console.log(' email ' + this.state.email);
     //console.log(' password ' + this.state.password);
     const { email, password } = this.state;
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.loginSucces.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(this.loginSucces.bind(this))
       .catch(this.loginFail.bind(this));
     });
   }
   loginSucces() {
     console.log('başarılı');
   }

   loginFail() {
     console.log('Hatalı');
   }

   render() {
     const { inputStyle } = styles;
     return (
       <Card>
         <CardSection>
          <TextInput
          placeholder="e-mail"
          style={inputStyle}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
         </CardSection>
         <CardSection>
           <TextInput
           placeholder="password"
           style={inputStyle}
           value={this.state.password}
           onChangeText={password => this.setState({ password })}
           />
         </CardSection>
         <CardSection>
          <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>
         </CardSection>
       </Card>
     )
   }
 }
const styles = {
inputStyle: {
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 18,
  flex: 1
},

}

export default LoginForm;
