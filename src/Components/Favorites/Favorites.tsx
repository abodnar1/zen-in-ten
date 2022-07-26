import React from "react";
import "./Favorites.css";
import { FavoriteProps } from "../../interfaces";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";

const Favorites = ({setFavList, favList}: FavoriteProps) => {

  const favQuotes = favList.map((fav, index) => {
    return (
      <FavoriteCard
        quote={fav.q}
        author={fav.a}
        image={fav.i}
        key={index}
        id={fav.q}
        setFavList={setFavList}
        favList={favList}
      />
    )
  })
  
  return ( 
    <div className="favorites-container">
      {favList.length ? favQuotes : <h3 className="fave-msg">No favorites yet! Click on the heart to favorite a quote!</h3>}
    </div>
  )
}

export default Favorites;