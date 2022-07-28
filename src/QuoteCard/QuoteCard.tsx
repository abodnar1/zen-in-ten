import React, { useEffect, useState } from "react";
import "./QuoteCard.css";
import { QuoteInterface } from "../interfaces";
import {AiFillHeart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

interface QuoteCardProps {
  quote: string;
  author: string;
  image: string;
  id: string;
	favList: QuoteInterface[];
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
}

const QuoteCard = ({ quote, author, image, id, setFavList, favList } : QuoteCardProps) => {
	const [isFav, setIsFav] = useState<boolean>(false)

  useEffect(() => {
    setIsFav(!!favList.find(fav => fav.q === quote))
  })
	
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
				<h2 className="quote" >"{quote}"</h2>
				<p className="author" >-{author}</p>
			</div>
			<div className="middle-container">
				<img src={image} className="quote-image"></img>
			</div>
			<div className="bottom-container">
				{isFav ? <button className="favorite-button" onClick={(e) => deleteFavorite(e)}><AiFillHeart className="delete-heart"/></button> 
				: 
				<button className="favorite-button" onClick={(e) => addFavorite(e)}><AiOutlineHeart className="add-heart"/></button>}
			</div>
    </div>
  )
};

export default QuoteCard;