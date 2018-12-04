import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import Home from 'pages/home'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        {/* <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Redirect from='*' to='/'></Redirect>
        </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
