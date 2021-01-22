import logo from './logo.svg';
import BridgeLabzLogo from './assets/images/BridgeLabzLogo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      title: 'Welcome, hello from Bridgelabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={BridgeLabzLogo}
           alt="The Bridgelabz logo: a Bridge to Employement through lab works" />
      </div>
    );
  }
}

export default App;
