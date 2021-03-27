import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tournaments from './components/tournaments';

const StyledTest = styled.h2`
  color: red;
`;

class About extends Component {
  render() {
    return (
      <h2>
        About Us
      </h2>
    )
  }
}

class Contact extends Component {
  render() {
    return (
      <h2>
        Contact Us
      </h2>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h1>My Personal Webpage!</h1>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/tournaments">Past Tournaments</Link>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/tournaments" component={Tournaments} />
        </div>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledTest>Hello</StyledTest>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
