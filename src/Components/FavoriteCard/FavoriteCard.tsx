import React from 'react'
import { QuoteInterface } from '../../interfaces';
import "./FavoriteCard.css"
import { AiOutlineDelete } from "react-icons/ai";

interface FavoriteCardProps{
  quote: string,
  author: string,
	image: string,
  setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
	favList: QuoteInterface[];
  id: string
}

const FavoriteCard = ({quote, author, image, setFavList, favList, id}: FavoriteCardProps) => {
  const deleteFavorite = (e: any) => {
    e.preventDefault()
    const favQuotes = favList.filter(favQuote => favQuote.q !== quote)
    setFavList(favQuotes)
  }

  return (
    <div className="favorite-card-wrapper">
			<div className="top-container">
				<img src={image} alt={author} className="quote-image"></img>
			</div>
      <div className="middle-container">
        <h2 className="quote">"{quote}"</h2>
        <p className="author">-{author}</p>
      </div>
      <div className="bottom-container">
				<span className="delete-button" onClick={(e) => deleteFavorite(e)}><AiOutlineDelete /></span>
      </div>
    </div>
  )
}

export default FavoriteCard