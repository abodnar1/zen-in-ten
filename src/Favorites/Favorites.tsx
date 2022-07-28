import React from "react";
import "./Favorites.css";
import { QuoteInterface } from "../interfaces";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

interface FavoriteProps {
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
	favList: QuoteInterface[];
}

const Favorites = ({setFavList, favList}: FavoriteProps) => {

    const favQuotes = favList.map((fav, index) => {
      return (
        <FavoriteCard
          quote={fav.q}
          author={fav.a}
          key={index}
          id={fav.q}
          setFavList={setFavList}
          favList={favList}
        />
      )
    })
  return ( 
    <div className="favorites-container">
    {favQuotes}
  </div>
  )
};

export default Favorites;