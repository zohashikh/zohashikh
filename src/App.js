import React from 'react';

import './App.css';
import Routes from "./Routes";
import {Home} from './features/Home'
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div></div>
      <Routes />
       </Router>
  );
}

export default App;
