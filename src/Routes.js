/*import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}*/

import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./containers/About";


import Home from "./containers/Home";


export default function Routes() {
  return (
           
           <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
               <About />
              </Route>
                   
           </Switch>
      
        )
    }
