import React, { useEffect, useState } from "react";
import "./Form.css";
import { Mood, FormProps } from "../../interfaces";
import { fetchAllQuoteKeywords, fetchQuotesByKeyword } from "../../apiCalls";

const Form = ({setAllQuotes, setError, error}: FormProps) => {
  const [moods, setMoods] = useState<Mood[]>([])

  useEffect(() => {
    fetchAllQuoteKeywords()
    .then(data => setMoods(data))
    .catch(error => setError(error.message))
  }, [])

  const getQuotesOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault()
    fetchQuotesByKeyword(e.target.value)
    .then(data => setAllQuotes(data))
    .catch(error => setError(error.message))
  }

 const moodValues = moods.map(mood => {
   return (
     <option value={mood.l} key={mood.k}>{mood.k}</option>
    )
  })

  return (
   <div>
    { moods.length && moods[0].a !== "zenquotes.io" ? 
     <form>
        <label htmlFor="select-mood"></label>
        <select className="dropdown" name="select-mood" id="selectMood" onChange={(e) => getQuotesOnChange(e)}>
          <option value="choose">Choose a Mood</option>
          {moodValues}
        </select>
      </form> 
      :
      <p className="error-message">Uh oh! We are not in the mood. Please try again later. {error}</p>
    }
   </div> 
  )
}

export default Form;