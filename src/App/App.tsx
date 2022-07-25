import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import { Route, Switch } from "react-router-dom";
import Quotes from '../Quotes/Quotes';
import Form from '../Form/Form';
import Favorites from '../Favorites/Favorites';

export interface Quote {
  q: string;
  a: string;
  h?: string;
}

const App = () => {
  const [allQuotes, setAllQuotes] = useState<Quote[]>([])
	const [favList, setFavList] = useState<Quote[]>([])

  return (

    <Switch>
      <Route exact path="/" >
        <Welcome />
      </Route>
      <Route path="/home" >
            <Form setAllQuotes={setAllQuotes}/>
            {allQuotes.length > 0 && <Quotes allQuotes={allQuotes} setAllQuotes={setAllQuotes} setFavList={setFavList} favList={favList} />}
      </Route>
			<Route exact path="/favorites" >
        <Favorites />
      </Route>
    </Switch> 
  );
}

export default App;

// Paths for Router
// Welcome = "/"
// App = "/home"
// Favorites = "/favorites"




