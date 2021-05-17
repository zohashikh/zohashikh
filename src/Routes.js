import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./features/Home";
import About from './features/About'
import RegisterationForm from './Register/Register'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
       <Route exact path="/register">
        <RegisterationForm />
      </Route>
    </Switch>
  );
}