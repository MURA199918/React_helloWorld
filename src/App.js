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
     userName: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    this.setState({ userName: event.target.value })
  }

  render() {
    return (
     <>
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={BridgeLabzLogo} onClick={this.onClick}
           alt="The Bridgelabz logo: a Bridge to Employement through lab works" />
      </div>
      <div className="text-box">
        <input onChange={this.onNameChange} />
      </div>
     </>
    );
  }
}

export default App;
