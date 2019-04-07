import React, { Component } from 'react';
import './App.css';
import Authen from './Authen';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Firebase Authentication</h1>
        </header>

        <div style={{height: '100px'}}></div>

        <Authen />

        <Footer />

      </div>
    );
  }
}

export default App;
