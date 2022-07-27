import React from "react";
import "./Favorites.css";
import { QuoteInterface } from "../interfaces";

interface FavoriteProps {
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
	favList: QuoteInterface[];
}

const Favorites = ({setFavList, favList}: FavoriteProps) => {
	const favorites = favList.map(favorite => {
    const deleteFavorite = (e: any) => {
      e.preventDefault()
      const favQuotes = favList.filter(favQuote => favQuote.q !== favorite.q)
      setFavList(favQuotes)
    }
    // we need to assign a key for this map to clear warning in console
		return(
      <div className="favorite-card-wrapper">
        <h2>"{favorite.q}"</h2>
        <p>-{favorite.a}</p>
        <button onClick={(e) => deleteFavorite(e)}>Delete</button>
      </div>
		)
	})

  return ( 
		<div className="favorites-container">
			{favorites}
		</div>
  )
};

export default Favorites;