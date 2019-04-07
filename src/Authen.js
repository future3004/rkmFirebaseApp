import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
var firebase = require('firebase');

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAow2xwDo1FjTXu5luCTes7HwLwxjLP0a0",
   authDomain: "udemysurvey-reactjs.firebaseapp.com",
   databaseURL: "https://udemysurvey-reactjs.firebaseio.com",
   projectId: "udemysurvey-reactjs",
   storageBucket: "udemysurvey-reactjs.appspot.com",
   messagingSenderId: "677752502346"
 };
 firebase.initializeApp(config);

class Authen extends Component {

  signUp(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user => {
      // when here: its good/success
      //var err = "Welcome " + user.email;
      var err = <Redirect to="/home" />;
      // firebase.database().ref('users/' + user.uid).set({
      //   email: user.email
      // });
      console.log(user);
      this.setState({err: err});
    });
    promise
    .catch(e => {
      var error = e.message;
      console.log(error);
      this.setState({err: error});
    });

  }

  login(event){
    // whenever user taps login btn
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    //console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    //TODO: handle login promise
    promise.then(user => {
      var logout = document.getElementById('logout');
      var err = <Redirect to="/home" />;
      //write welcome message to user
      logout.classList.remove('hide');
      this.setState({err: err});

    });

    promise.catch(e => {
      var error = e.message;
      console.log(error);
      this.setState({err: error});
    });
  }

  logOut(){
    firebase.auth().signOut();
    var logout = document.getElementById('logout');

    //write a thanks message to user
    logout.classList.add('hide');
  }

  google(){
    // sign in/up with google
    console.log("Google sign up");

    // Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();

    //provider.addScope('profile');
    //provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result);
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     firebase.database().ref('users/'+user.uid).set({
       email: user.email,
       name: user.displayName
     });

     // can also use redirect
     var err = <Redirect to="/home" />;
     this.setState({err: err});

   }).catch(function(e){
      var msg = e.message;
      console.log(msg);
   });

  }


  constructor(props){
    super(props);

    this.state = {
      err: ''
    };
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logOut = this.logOut.bind(this);
    this.google = this.google.bind(this);
  }

  render(){
    return(
      <div>
        <div className="container">
          <input className="contInput" id="email" ref="email" type="email" placeholder="Enter Email"/> <br />
          <input className="contInput" id="password" ref="password" type="password" placeholder="Enter password"/> <br />
        </div>

        <p>{this.state.err}</p>

        <button onClick={this.login}>Login</button>
        <button onClick={this.signUp}>Sign Up</button>
        <button id="logout" className="hide" onClick={this.logOut}>Log out</button> <br />
        <button id="google" className="google" onClick={this.google}>Sign In with Google</button>
      </div>
      );
    }
  }

  export default Authen;

  //<LoginHome />
