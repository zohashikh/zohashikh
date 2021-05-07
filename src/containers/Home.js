/*import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
      </div>
    </div>
  );
}*/
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Routes from '../Routes';
import { Link,Router } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
     
 <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
          <button><Link to="/about">Home</Link></button>

        <hr />
     
        </div>  
      </div>

  
     
    );
  }
}