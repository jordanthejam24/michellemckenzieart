import React from 'react';
import '../css/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';

function App() {
    
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/project/:projectId">
            <Header />
            <Project />
            <Footer />
          </Route>
          <Route path="/gallery">
            <Header />
            <Gallery />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/">
            <Home />
          {/* header and footer and homepage maybe */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
