import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import { QuoteInterface } from "../interfaces";
import Welcome from "../Welcome/Welcome";
import Quotes from '../Quotes/Quotes';
import Form from '../Form/Form';
import Favorites from '../Favorites/Favorites';

const App = () => {
  const [allQuotes, setAllQuotes] = useState<QuoteInterface[]>([])
	const [favList, setFavList] = useState<QuoteInterface[]>([])

  return (
		<div>
			<nav>
				<Link to='/Favorites'>Favorites</Link>
				<Link to='/Home'>Home</Link>
			</nav>

      <Switch>

        <Route exact path="/" >
          <Welcome />
        </Route>

        <Route path="/home" >
          <Form setAllQuotes={setAllQuotes}/>
          {allQuotes.length > 0 && <Quotes allQuotes={allQuotes} setAllQuotes={setAllQuotes} favList={favList} setFavList={setFavList}/>}
        </Route>

        <Route exact path="/favorites" >
          <Favorites favList={favList} setFavList={setFavList} />
        </Route>

      </Switch> 
		</div>
  );
}

export default App;



