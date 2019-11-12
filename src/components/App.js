import React from "react";
// import logo from './logo.svg';
import "./App.css";
import POS from "./POS";
import Slip from "./Slip";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route exact path="/" component={ POS } />
        <Route exact path="/slip" component={Slip} />
      </Router>
    </div>
  );
}

export default App;
