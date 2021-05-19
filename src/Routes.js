import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./features/Home";
import About from './features/About'
import RegisterationForm from './features/Register/Register'
import Userdata from './features/ShowUsers/ShowUsers'
import AddUser from './features/AddUser/AddUser'
import UpdateUser from "./features/AddUser/UpdateUser";


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
       <Route exact path="/userdata">
        <Userdata />
      </Route>
      <Route exact path="/adduser">
        <AddUser />
      </Route>
      <Route exact path="/updateuser">
        <UpdateUser />
      </Route>
      
    </Switch>
  );
}