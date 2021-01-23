import React from 'react';
import './App.css';
import Home from './Components/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import AppRouter from './AppRouter';
class App extends React.Component {

  render() {
    return (
      <div>
       <AppRouter/>
      </div>
    );
  }
}
export default App;