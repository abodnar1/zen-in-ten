import React from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Welcome />
      </Route>
    </Switch>
  );
}

export default App;

// Paths for Router
// Welcome = "/"
// App = "/home"
// Favorites = "/favorites"
