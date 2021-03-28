import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LatestTourney from './components/latestTourney';
import Tournaments from './components/tournaments';

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
          <h1>Golf With Your Friends</h1>
          <Link to="/Home">Home</Link>
          {/* <Link to="/players">Players</Link> */}
          <Link to="/tournaments">Past Tournaments</Link>
          <Route path="/home" component={LatestTourney} />
          {/* <Route path="/players" component={Players} /> */}
          <Route path="/tournaments" component={Tournaments} />

        </div>
      </Router>
    </div>
  );
}

export default App;
