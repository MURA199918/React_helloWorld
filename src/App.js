import React from 'react';
import './App.css';
import Home from './Components/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
class App extends React.Component {

  render() {
    return (
      <div className="app-main">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/welcome" component={Welcome}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;