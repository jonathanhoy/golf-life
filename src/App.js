import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LatestTourney from './components/LatestTourney';
import PastTournaments from './components/PastTournaments';
import Leaderboard from './components/Leaderboard';
import variables from './styles/variables';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <Route exact path="/" component={Leaderboard} />
          <Route exact path="/" component={LatestTourney} />
          {/* <Route path="/players" component={Players} /> */}
          <Route exact path="/tournaments" component={PastTournaments} />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

const Main = styled.main`
  margin-top: 120px;
  @media (max-width: ${variables.sm}) {
    margin-top: 119px;
  }
`;

export default App;
