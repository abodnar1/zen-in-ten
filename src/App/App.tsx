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
    fetch('https://zenquotes.io/api/random?key=11ef57ae8191dde524535934c158c4543950e06c')
    .then(response => response.json())
    .then(data => setAllQuotes(data))
    .catch(error => console.log(error.message))
  }, []);

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
