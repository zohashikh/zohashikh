import React from 'react';

import './App.css';
import Routes from "./Routes";
import {Home} from './features/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/register">Register</Link></button>
        <button><Link to="/userdata">Users</Link></button>
      
        <hr />
        <Routes />
      </div>
       </Router>
  );
}

export default App;
