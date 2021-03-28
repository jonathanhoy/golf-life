import React from 'react';
import './App.css';
import Header from './components/Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import LatestTourney from './components/LatestTourney';
import PastTournaments from './components/PastTournaments';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Leaderboard} />
        <Route exact path="/" component={LatestTourney} />
        {/* <Route path="/players" component={Players} /> */}
        <Route exact path="/tournaments" component={PastTournaments} />
      </Router>
    </div>
  );
}

export default App;
