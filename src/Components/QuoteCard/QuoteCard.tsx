import React, { useEffect, useState } from "react";
import "./QuoteCard.css";
import { QuoteCardProps } from "../../interfaces";
import {AiFillHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";

const QuoteCard = ({ quote, author, image, id, setFavList, favList } : QuoteCardProps) => {
	const [isFav, setIsFav] = useState<boolean>(false)

  useEffect(() => {
    setIsFav(!!favList.find(fav => fav.q === quote))
  }, [favList, quote])
	
	const addFavorite = (e: React.FormEvent): void => {
		e.preventDefault()
		const newFav = {q: quote, a: author, i: image}
		setIsFav(true)
		setFavList(favList => [...favList, newFav])
	}

	const deleteFavorite = (e: any) => {
		e.preventDefault()
		const favQuotes = favList.filter(favQuote => favQuote.q !== quote)
		setIsFav(false)
		setFavList(favQuotes)
	}

  return (
    <div className="card-wrapper">
			<div className="top-container">
				<img src={image} alt={author} className="quote-image"></img>
			</div>
			<div className="middle-container">
				<h2 className="quote" >"{quote}"</h2>
				<p className="author" >-{author}</p>
			</div>
			<div className="bottom-container">
				{isFav ? <span className="favorite-button" onClick={(e) => deleteFavorite(e)}><AiFillHeart className="delete-heart"/></span> 
				: 
				<span className="favorite-button" onClick={(e) => addFavorite(e)}><AiOutlineHeart className="add-heart"/></span>}
			</div>
    </div>
  )
}

export default QuoteCard;