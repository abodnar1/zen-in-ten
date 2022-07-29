import React, { useEffect, useState } from 'react'
import "./DailyQuote.css"
interface DailyQuote {
  q: string;
  a: string;
  h?: string;
}

const DailyQuote = () => {
  const fakeQuote = {q: "", a: "", h: ""}
  const [ dailyQuote, setDailyQuote] = useState<DailyQuote>(fakeQuote)

  useEffect(() => {
    fetch("/api/today?key=11ef57ae8191dde524535934c158c4543950e06c")
    .then(response => response.json())
    .then(data => setDailyQuote(data[0]))
  })


  return (
    <div className="daily-quote-wrapper">
     <div className="top-container">
        <h2 className="daily-quote">Daily Quote</h2>
				<h2 className="quote" >"{dailyQuote.q}"</h2>
				<p className="author" >-{dailyQuote.a}</p>
			</div>
    </div>
  )
}

export default DailyQuote