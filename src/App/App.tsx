import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import { Route, Switch } from "react-router-dom";
import Quotes from '../Quotes/Quotes';
import Form from '../Form/Form';

export interface Quote {
  q: string;
  a: string;
  h: string;
}

const App = () => {
  const [allQuotes, setAllQuotes] = useState<Quote[]>([])
  const [error, setError] = useState<string>('')

  // useEffect(() => {
  //   fetch('https://zenquotes.io/api/quotes?key=11ef57ae8191dde524535934c158c4543950e06c')
  //   .then(response => response.json())
  //   .then(data => setAllQuotes(data))
  //   .catch(error => setError(error.message))
  // },[]);


  return (
    <Switch>
      <Route exact path="/" >
        <Welcome />
      </Route>
      <Route path="/home" >
            {/* {error && <p>{error}</p>} */}
            <Form setAllQuotes={setAllQuotes}/>
            {allQuotes.length > 0 && <Quotes allQuotes={allQuotes} setAllQuotes={setAllQuotes} />}
      </Route>
    </Switch> 
  );
}

export default App;

// Paths for Router
// Welcome = "/"
// App = "/home"
// Favorites = "/favorites"




