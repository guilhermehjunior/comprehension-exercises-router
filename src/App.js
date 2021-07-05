import React, { Component } from 'react';
import { BrowserRouter, Route, Link }from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/users/:id" render= {(props) => <Users {...props} greetingsMessage="Good Morning" />} />
      </BrowserRouter>
    ); 
  }
}

export default App;
