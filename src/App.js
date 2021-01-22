import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      title: 'hello from Bridgelabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;
