import React from "react";
import "./Quotes.css";
import { QuoteInterface } from "../interfaces";
import QuoteCard from "../QuoteCard/QuoteCard";

interface QuotesProps {
  allQuotes: QuoteInterface[];
  setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>
	favList: QuoteInterface[];
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>
}

const Quotes = ({ allQuotes, setAllQuotes, setFavList, favList } : QuotesProps ) => {
  const quoteCards = allQuotes.map((quote, index) => {
    return (
      <QuoteCard 
				quote={quote.q}
				author={quote.a}
				key={index}
				id={quote.q}
				favList={favList}
				setFavList={setFavList}
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