import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PastTournaments from './components/PastTournaments';
import Players from './components/Players';
import Maps from './components/Maps';
import About from './components/About';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/results" component={PastTournaments} />
            <Route exact path="/courses" component={Maps} />
            <Route exact path="/about" component={About} />
            <Route exact path="/admin" component={Admin} />
          </main>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
