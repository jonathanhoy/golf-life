import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PastTournaments from './components/PastTournaments';
import Players from './components/Players';
import Maps from './components/Maps';
import variables from './styles/variables';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Main>
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/tournaments" component={PastTournaments} />
            <Route exact path="/maps" component={Maps} />
          </Main>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

const Main = styled.main`
  margin-top: 72px;
`;

export default App;
