import logo from './logo.svg';
import BridgeLabzLogo from './assets/images/BridgeLabzLogo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
class App extends React.Component {

  url = 'https://www.bridgelabz.com/'
  
  constructor() {
    super()
    this.state = {
      title: 'Welcome, hello from Bridgelabz'
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={BridgeLabzLogo} onClick={this.onClick}
           alt="The Bridgelabz logo: a Bridge to Employement through lab works" />
      </div>
    );
  }
}

export default App;
