import React from "react";
import { Router,Route, Switch } from "react-router-dom";
import {history} from './history';
import sidebar1 from './features/sidebar';
import {AddPostForm} from './features/posts/Add_Project'
export default function Routes() {
  return (
    <Switch>
      <Router history={history}>
        <Switch>
          <Route path="/sidebar" component={sidebar1} />
           <Route path="/Add" component={AddPostForm} />
  
    </Switch>
      </Router>
    </Switch>
  );
}