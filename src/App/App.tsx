import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import { Route, Switch } from "react-router-dom";

interface Quote {
  q: string;
  a: string;
  h: string;
}

const App = () => {
  const [allQuotes, setAllQuotes] = useState<Quote[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetch('https://zenquotes.io/api/random?key=11ef57ae8191dde524535934c158c4543950e06c')
    .then(response => response.json())
    .then(data => setAllQuotes(data))
    .catch(error => setError(error.message))
  },[]);


  return (
    <div>
      <h1>Hello World</h1>
        {error && <p>{error}</p>}
        {allQuotes.length > 0 && <p>{allQuotes[0].q}</p>}
    </div>
  );
}

export default App;

// Paths for Router
// Welcome = "/"
// App = "/home"
// Favorites = "/favorites"



    /* <Switch>
      <Route exact path="/" >
        <Welcome />
      </Route>
      <Route path="/home" >
      </Route>
    </Switch> */

