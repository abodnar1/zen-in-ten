import React, {useState} from "react";
import "./QuoteCard.css";
import {AiFillHeart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

interface QuoteCardProps {
  quote: string;
  author: string;
  id: number;
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
	

	const addFavorite = (e: any): void => {
		e.preventDefault()
		const newFav = {q: quote, a: author}
		setFavList([...favList, newFav])
	}

	const deleteFavorite = (e: any) => {
		e.preventDefault()
		console.log("delete")

	}

  return (
    <div className="card-wrapper">
      <h2>{quote}</h2>
      <p>{author}</p>
			{isFav ? <button className="favorite-button" onClick={(e) => addFavorite(e)}>add favorite</button> 
			: 
			<button className="favorite-button" onClick={(e) => deleteFavorite(e)}>delete favorite</button>}
    </div>
  )
};

export default QuoteCard;