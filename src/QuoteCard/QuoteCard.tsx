import React, { useEffect, useState } from "react";
import "./QuoteCard.css";
import { QuoteInterface } from "../interfaces";
// import {AiFillHeart} from "react-icons/ai"
// import {AiOutlineHeart} from "react-icons/ai"

interface QuoteCardProps {
  quote: string;
  author: string;
  id: string;
	favList: QuoteInterface[];
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
}

const QuoteCard = ({ quote, author, id, setFavList, favList } : QuoteCardProps) => {
	const [isFav, setIsFav] = useState<boolean>(false)

  useEffect(() => {
    setIsFav(!!favList.find(fav => fav.q === quote))
  })
	
	const addFavorite = (e: React.FormEvent): void => {
		e.preventDefault()
		const newFav = {q: quote, a: author}
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
      <h2>"{quote}"</h2>
      <p>-{author}</p>
			{isFav ? <button className="favorite-button" onClick={(e) => deleteFavorite(e)}>delete favorite</button> 
			: 
			<button className="favorite-button" onClick={(e) => addFavorite(e)}>add favorite</button>}
    </div>
  )
};

export default QuoteCard;