import React from "react";
import "./Quotes.css";
import { Quote } from "../App/App";
import QuoteCard from "../QuoteCard/QuoteCard";

interface QuotesProps {
  allQuotes: Quote[];
  setAllQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
}

const Quotes = ({allQuotes, setAllQuotes} : QuotesProps ) => {
  const quoteCards = allQuotes.map(quote => {
    return (
      <QuoteCard 
        quote={quote.q}
        author={quote.a}
        key={quote.h}
        id={Date.now()}
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