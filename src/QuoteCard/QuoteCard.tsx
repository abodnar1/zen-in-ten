import React, {useState} from "react";
import "./QuoteCard.css";
import {AiFillHeart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

interface QuoteCardProps {
  quote: string;
  author: string;
  id: string;
	setFavList: React.Dispatch<React.SetStateAction<Quote[]>>;
	favList: Quote[];
}

interface Quote {
  q: string;
  a: string;
  h?: string;
}

const QuoteCard = ({quote, author, id, setFavList, favList} : QuoteCardProps) => {
	const [isFav, setIsFav] = useState<boolean>(false)
	
	const addFavorite = (e: React.FormEvent): void => {
		e.preventDefault()
		const newFav = {q: quote, a: author}
		setFavList(favList => [...favList, newFav])
		setIsFav(true)
		console.log('favList:', favList)
		console.log('new Fav:', newFav)
	}

	const deleteFavorite = (e: any) => {
		e.preventDefault()
		const favQuotes = favList.filter(favQuote => favQuote.q !== quote)
		setFavList(favQuotes)
		console.log('favvvv QUOTES:', favQuotes)
		setIsFav(false)
	}

  return (
    <div className="card-wrapper">
      <h2>{quote}</h2>
      <p>{author}</p>
			{isFav ? <button className="favorite-button" onClick={(e) => deleteFavorite(e)}>delete favorite</button> 
			: 
			<button className="favorite-button" onClick={(e) => addFavorite(e)}>add favorite</button>}
    </div>
  )
};

export default QuoteCard;