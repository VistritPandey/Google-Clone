import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>

    <switch>
      <Route path="/search">
        <h1>This is the search page</h1>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </switch>

      {/*home page */}
      <Home />

      {/*search page*/}
    </Router>
    </div>
  );
}

export default App;
