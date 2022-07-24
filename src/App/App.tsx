import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import { Route, Switch } from "react-router-dom";

interface Quote {
  q: string;
  a: string;
}

const App = () => {
  const [allQuotes, setAllQuotes] = useState<Quote[]>([])

  useEffect(() => {
    fetch('')
  })

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
