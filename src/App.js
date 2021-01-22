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
     userName: '',
     nameError: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value })
    if(nameRegex.test(event.target.value)) {
      this.setState({ nameError: '' })
    }else {
      this.setState({ nameError: 'Name is Incorrect' })
    }
  }

  render() {
    return (
     <div className="app-main">
      <div className="main">
        <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={BridgeLabzLogo} onClick={this.onClick}
           alt="The Bridgelabz logo: a Bridge to Employement through lab works" />
      </div>
      <div className="text-box">
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <div>
        At Bridgelabz we're a community of
        <ul>
          <li>technologists</li>
          <li>thinkers</li>
          <li>builders</li>
        </ul>
        Working together to keep the Tech Employability at Engineers alive......
        <br />
           <br />
        To Know about us, visit <a href="http://bridgelabz.com/" rel="noreferrer" target="_blank">Bridgelabz</a> to learn even more about our mission
        i.e <b>Employability to All</b>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
