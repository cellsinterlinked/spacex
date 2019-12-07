import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/layout/Dashboard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RocketInfo from './components/rockets/RocketInfo';

class App extends Component {
  render() {
  
  return (
    <Router>

    <div className="App">
      <Switch>
        <Route exact path="/rockets" component={Dashboard} />
        <Route exact path="/rockets/:name" component={RocketInfo} />
      </Switch>
    </div>
    </Router>
  );
}}

export default App;
