import React from 'react';
import './App.css';
import Home from './Components/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import HomePage from './Pages/HomePage';
import WelcomePage from './Pages/WelcomePage';
class AppRouter extends React.Component {

  render() {
    return (
      <div className="app-main">
        <Router>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/" component={Welcome} exact></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default AppRouter;