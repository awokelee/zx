import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import Home from 'pages/home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Redirect from='*' to='/'></Redirect>
        </Switch>
      </Router>
    );
  }
}

export default App;
