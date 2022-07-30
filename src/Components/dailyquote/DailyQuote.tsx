import React, { useEffect, useState } from 'react'
import "./DailyQuote.css"
import { DailyQuoteInterface } from "../../interfaces"
import { fetchDailyQuote } from "../../apiCalls"

interface DailyQuoteProps {
  error?: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const DailyQuote = ({error, setError}: DailyQuoteProps) => {
  const emptyQuote = {q: "", a: "", h: ""}
  const [ dailyQuote, setDailyQuote] = useState<DailyQuoteInterface>(emptyQuote)

  useEffect(() => {
    fetchDailyQuote()
    .then(data => setDailyQuote(data[0]))
    .catch(error => setError(error.message))
  }, [])

  return (
    <div className="daily-quote-wrapper">
      {error && <p>Uh oh! We've encountered an error! {error}</p>}
      {dailyQuote.a === "zenquotes.io" ? 
				<div>
        	<p>Uh oh! We've encountered an error! {dailyQuote.q}</p>
				</div>
        :
        <div className="daily-quote-container">
          <h2 className="daily-quote">Daily Quote</h2>
          <h2 className="quote" >"{dailyQuote.q}"</h2>
          <p className="author" >-{dailyQuote.a}</p>
        </div>
      }
    </div>
  )
}

export default DailyQuote