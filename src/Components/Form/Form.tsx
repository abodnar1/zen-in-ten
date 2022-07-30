import React, { useEffect, useState } from "react";
import "./Form.css";
import { Mood, FormProps } from "../../interfaces";
import { fetchAllQuoteKeywords, fetchQuotesByKeyword } from "../../apiCalls";

const Form = ({setAllQuotes}: FormProps) => {
  const [moods, setMoods] = useState<Mood[]>([])

  useEffect(() => {
    fetchAllQuoteKeywords()
    .then(data => setMoods(data))
  }, [])

  const getQuotesOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault()
    fetchQuotesByKeyword(e.target.value)
    .then(data => setAllQuotes(data))
  }
 
 const moodValues = moods.map(mood => {
   return (
     <option value={mood.l} key={mood.k}>{mood.k}</option>
    )
  })

  return (
    <form>
      <select className="dropdown" name="select-mood" id="selectMood" onChange={(e) => getQuotesOnChange(e)}>
        <option value="choose">Choose a Mood</option>
        {moodValues}
      </select>
    </form>
  )
}

export default Form;