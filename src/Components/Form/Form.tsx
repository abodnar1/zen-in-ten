import React, { useEffect, useState } from "react";
import "./Form.css";
import { QuoteInterface, Mood } from "../../interfaces";
import { fetchAllQuoteKeywords, fetchQuotesByKeyword } from "../../apiCalls";

interface formProps {
	setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
}

const Form = ({setAllQuotes}: formProps) => {
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
   return(
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