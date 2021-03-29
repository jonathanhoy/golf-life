import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PastTournaments from './components/PastTournaments';
import variables from './styles/variables';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          {/* <Route path="/players" component={Players} /> */}
          <Route exact path="/tournaments" component={PastTournaments} />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

const Main = styled.main`
  margin-top: 104px;
  @media (max-width: ${variables.sm}) {
    margin-top: 103px;
  }
`;

export default App;
