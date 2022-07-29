import React, { useEffect, useState } from "react";
import "./Form.css";
import { QuoteInterface } from "../../interfaces";

interface formProps {
	setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
}

interface Mood{
  k: string;
  l: string;
}

const Form = ({setAllQuotes}: formProps) => {
  const [moods, setMoods] = useState<Mood[]>([])

  useEffect(() => {
    fetch("api/keywords?key=11ef57ae8191dde524535934c158c4543950e06c")
    .then(response => response.json())
    .then(data => setMoods(data))
  }, [])
  // need a .catch() for error handling

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
};

export default Form;