import React, {useState} from "react";
import "./QuoteCard.css";
import {AiFillHeart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

interface QuoteCardProps {
  quote: string;
  author: string;
  id: number;
	setFavList: React.Dispatch<React.SetStateAction<Quote[]>>;
}

interface Quote {
  q: string;
  a: string;
  h: string;
}

const QuoteCard = ({quote, author, id, setFavList} : QuoteCardProps) => {
	const [isFav, setIsFav] = useState<boolean>(false)
	
	const handleFavAddClick = (e: any): void => {
		setIsFav(true) 
		console.log(isFav)
		// setFavList(prevFavList => [...prevFavList, ])
	}

  return (
    <div className="card-wrapper">
      <h2>{quote}</h2>
      <p>{author}</p>
			<AiOutlineHeart onClick={(e) => handleFavAddClick(e)}/>
    </div>
  )
};

export default QuoteCard;