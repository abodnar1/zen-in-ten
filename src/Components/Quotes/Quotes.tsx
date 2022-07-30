import React from "react";
import "./Quotes.css";
import { QuotesProps } from "../../interfaces";
import QuoteCard from "../../Components/QuoteCard/QuoteCard";

const Quotes = ({ allQuotes, setAllQuotes, setFavList, favList } : QuotesProps ) => {
  const quoteCards = allQuotes.map((quote, index) => {
    return (
      <QuoteCard 
				quote={quote.q}
				author={quote.a}
        image={quote.i}
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
}

export default Quotes;