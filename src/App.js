import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LatestTourney from './components/latestTourney';
import PastTournaments from './components/pastTournaments';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={LatestTourney} />
        {/* <Route path="/players" component={Players} /> */}
        <Route exact path="/tournaments" component={PastTournaments} />
      </Router>
    </div>
  );
}

export default App;
