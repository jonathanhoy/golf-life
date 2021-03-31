import React from 'react';
import styled from 'styled-components';
import variables from './styles/variables';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PastTournaments from './components/PastTournaments';
import Players from './components/Players';
import Maps from './components/Maps';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <SiteContainer>
            <Header />
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/players" component={Players} />
              <Route exact path="/tournaments" component={PastTournaments} />
              <Route exact path="/maps" component={Maps} />
              <Route exact path="/about" component={About} />
            </main>
            <Footer />
          </SiteContainer>
        </ScrollToTop>
      </Router>
    </div>
  );
}

const SiteContainer = styled.div`
  background-color: ${variables.green};
`;

export default App;
