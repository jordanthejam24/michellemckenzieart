import React from 'react';
import '../css/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
