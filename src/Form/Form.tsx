import React, { useEffect, useState } from "react";
import "./Form.css";

interface formProps {
	setAllQuotes: Function;
}
// why can't we change this to the React.Dispatch?

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
  })
  // need a .catch() for error handling

 const fetchKeyword = (e: any): void => {
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
      <select name="select-mood" id="selectMood" onChange={(e) => fetchKeyword(e)}>
        <option value="choose">---Choose a Mood---</option>
        {moodValues}
      </select>
    </form>
  )
};

export default Form;