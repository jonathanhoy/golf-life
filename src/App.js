import React from 'react';
import './App.css';
import Header from './components/Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
