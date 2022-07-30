import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { QuoteInterface } from "../../interfaces";
import './App.css';

// page components
import Welcome from "../Welcome/Welcome";
import Quotes from '../Quotes/Quotes';
import Form from '../Form/Form';
import Favorites from '../Favorites/Favorites';
import Nav from '../Nav/Nav';
import DailyQuote from '../DailyQuote/DailyQuote';

const App = () => {
  const [allQuotes, setAllQuotes] = useState<QuoteInterface[]>([])
	const [favList, setFavList] = useState<QuoteInterface[]>([])
  const [error, setError] = useState<string>("")

  return (
		<div>
      <Switch>
        <Route exact path="/" >
          <Welcome />
        </Route>
        <Route path="/home" >
					<Nav setAllQuotes={setAllQuotes}/>
						<h2 className="home-page-header">✨It's time to get Zen in Ten✨</h2>
          <Form setAllQuotes={setAllQuotes} setError={setError}/>
          {allQuotes.length > 0 ? 
            <Quotes allQuotes={allQuotes} setAllQuotes={setAllQuotes} favList={favList} setFavList={setFavList}/> :
            <DailyQuote error={error} setError={setError}/>
          }
        </Route>
        <Route exact path="/favorites" >
					<Nav setAllQuotes={setAllQuotes}/>
					  <h2 className="favorite-page-header">Favorites</h2>
          <Favorites favList={favList} setFavList={setFavList} />
        </Route>
      </Switch> 
		</div>
  )
}

export default App;



