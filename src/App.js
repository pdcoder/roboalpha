import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LayoutComponent from './Layout/LayoutComponent';
import Signin from './Login/Signin';
class App extends Component {
  render() {
    return (
      <Router>
      <Route path="/"  component={LayoutComponent} />
      </Router>
    )
  }
}

export default App;
