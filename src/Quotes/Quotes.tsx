import React from "react";
import "./Quotes.css";
import { Quote } from "../App/App";

interface QuotesProps {
  allQuotes: Quote[];
  setAllQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
}

const Quotes = ({allQuotes, setAllQuotes} : QuotesProps ) => {
  return (
    <div className="quotes-container"></div>
  )
};

export default Quotes;