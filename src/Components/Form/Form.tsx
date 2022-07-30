import React, { useEffect, useState } from "react";
import "./Form.css";
import { QuoteInterface, Mood } from "../../interfaces";
import { fetchQuotes } from "../../apiCalls";

interface formProps {
	setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
}

const Form = ({setAllQuotes}: formProps) => {
  const [moods, setMoods] = useState<Mood[]>([])

  useEffect(() => {
    fetchQuotes()
    .then(data => setMoods(data))
  }, [])
  // need a .catch() for error handling?

 const fetchKeyword = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  e.preventDefault()

  fetch(e.target.value)
    .then(response => response.json())
    .then(data => {
      setAllQuotes(data)
    })
    // need a .catch() for error handling
 }
 
 const moodValues = moods.map(mood => {
   return(
     <option value={mood.l} key={mood.k}>{mood.k}</option>
   )
})

  return (
    <form>
      <select className="dropdown" name="select-mood" id="selectMood" onChange={(e) => fetchKeyword(e)}>
        <option value="choose">Choose a Mood</option>
        {moodValues}
      </select>
    </form>
  )
}

export default Form;