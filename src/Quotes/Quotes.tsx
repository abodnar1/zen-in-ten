import React from "react";
import "./Quotes.css";
import { Quote } from "../App/App";
import QuoteCard from "../QuoteCard/QuoteCard";

interface QuotesProps {
  allQuotes: Quote[];
  setAllQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
	setFavList: React.Dispatch<React.SetStateAction<Quote[]>>
	favList: Quote[];
}

const Quotes = ({allQuotes, setAllQuotes, setFavList, favList} : QuotesProps ) => {
  const quoteCards = allQuotes.map((quote, index) => {
    return (
      <QuoteCard 
				quote={quote.q}
				author={quote.a}
				key={index}
				id={quote.q}
				setFavList={setFavList}
				favList={[]}
				/>
    )
  })
  return (
    <div className="quotes-container">
      {quoteCards}
    </div>
  )
};

export default Quotes;