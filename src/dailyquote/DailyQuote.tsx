import React, { useEffect, useState } from 'react'

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
    <div>
      {dailyQuote.q}
      {dailyQuote.a}
    </div>
  )
}

export default DailyQuote