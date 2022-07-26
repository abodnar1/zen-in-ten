import React from "react";
import "./Favorites.css";
import {Quote} from '../App/App'

interface FavoriteProps {
	setFavList: React.Dispatch<React.SetStateAction<Quote[]>>;
	favList: Quote[];
}

const Favorites = ({setFavList, favList}: FavoriteProps) => {
	const favorites = favList.map(favorite => {
		return(
			<div className="favorites-container">
				<h2>{favorite.q}</h2>
				<p>{favorite.a}</p>
				<button>hi</button>
			</div>
		)
	})
  return ( 
		<div>
			{favorites}
		</div>
  )
};

export default Favorites;