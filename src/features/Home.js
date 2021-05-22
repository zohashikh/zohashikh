import React from "react";
import "./Home.css";
import About from './About'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
export default function Home() {
  return (
      <div>
        
     <Button variant="contained" color="primary">
      <Link className="link" to="/">Home</Link>
    </Button> 
     <Button variant="contained" color="primary">
      <Link  className="link" to="/userdata">Users</Link>
    </Button> 
     <Button variant="contained" color="primary">
      <Link className="link" to="/about">About</Link>
    </Button> 
     <Button variant="contained" color="primary">
      <Link className="link" to="/dashboard">Dashboard</Link>
    </Button> 
    
        <hr />
      
     
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
  <Button variant="contained" color="primary">
      Hello World
    </Button>
       
      </div> 
    </div>
     </div>
  );
}