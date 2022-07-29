import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import { QuoteInterface } from "../interfaces";
import './App.css';

// page components
import Welcome from "../Welcome/Welcome";
import Quotes from '../Quotes/Quotes';
import Form from '../Form/Form';
import Favorites from '../Favorites/Favorites';
import Nav from '../Nav/Nav'

const App = () => {
  const [allQuotes, setAllQuotes] = useState<QuoteInterface[]>([])
	const [favList, setFavList] = useState<QuoteInterface[]>([])

  return (
		<div>
      <Switch>

        <Route exact path="/" >
          <Welcome />
        </Route>

        <Route path="/home" >
					<Nav />
						<h2 className="home-header">✨It's time to get Zen in Ten✨</h2>
          <Form setAllQuotes={setAllQuotes}/>
          {allQuotes.length > 0 && <Quotes allQuotes={allQuotes} setAllQuotes={setAllQuotes} favList={favList} setFavList={setFavList}/>}
        </Route>

        <Route exact path="/favorites" >
					<Nav />
          <h2 className="home-header">✨Favorites✨</h2>
          {favList.length ? <Favorites favList={favList} setFavList={setFavList} /> : <h3>No favorites yet! Click on the heart to favorite a quote!</h3>}
        </Route>

      </Switch> 
		</div>
  );
}

export default App;



