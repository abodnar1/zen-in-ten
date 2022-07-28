import React from 'react'
import { QuoteInterface } from '../interfaces';
import "./FavoriteCard.css"

interface FavoriteCardProps{
  quote: string,
  author: string,
  setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
	favList: QuoteInterface[];
  id: string
}

const FavoriteCard = ({quote, author, setFavList, favList, id}: FavoriteCardProps) => {
  const deleteFavorite = (e: any) => {
    e.preventDefault()
    const favQuotes = favList.filter(favQuote => favQuote.q !== quote)
    setFavList(favQuotes)
  }

  return (
    <div className="favorite-card-wrapper">
      <div className="top-container">
        <h2>"{quote}"</h2>
        <p>-{author}</p>
      </div>
      <div className="bottom-container">
        <button className="delete-button" onClick={(e) => deleteFavorite(e)}>Delete</button>
      </div>
    </div>
  )
}

export default FavoriteCard