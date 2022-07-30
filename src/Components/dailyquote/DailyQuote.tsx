import React, { useEffect, useState } from 'react'
import "./DailyQuote.css"
import { DailyQuoteInterface } from "../../interfaces"
import { fetchDailyQuote } from "../../apiCalls"

const DailyQuote = () => {
  const fakeQuote = {q: "", a: "", h: ""}
  const [ dailyQuote, setDailyQuote] = useState<DailyQuoteInterface>(fakeQuote)

  useEffect(() => {
    fetchDailyQuote()
    .then(data => setDailyQuote(data[0]))
  }, [])

  return (
    <div className="daily-quote-wrapper">
     <div className="daily-top-container">
        <h2 className="daily-quote">Daily Quote</h2>
				<h2 className="quote" >"{dailyQuote.q}"</h2>
				<p className="author" >-{dailyQuote.a}</p>
			</div>
    </div>
  )
}

export default DailyQuote