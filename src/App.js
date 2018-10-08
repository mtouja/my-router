import React, { Component } from 'react';
import { Route, NavLink, } from 'react-router-dom';
import Home from './Home';
import History from './History';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/" > Home </NavLink>
        <NavLink to="/notre-histoire" > History </NavLink>
        <Route exact path="/" component={Home} />
        <Route path="/notre-histoire" component={History} />
      </div>
    );
  }
}

export default App;
