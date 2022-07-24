import React from "react";
import "./QuoteCard.css";

interface QuoteCardProps {
  quote: string;
  author: string;
  id: number;
}

const QuoteCard = ({quote, author, id} : QuoteCardProps) => {
  return (
    <div className="card-wrapper">
      <h2>{quote}</h2>
      <p>{author}</p>
    </div>
  )
};

export default QuoteCard;