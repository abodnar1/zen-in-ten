import React, { useEffect, useState } from "react";
import "./Form.css";

export interface Quote {
  q: string;
  a: string;
  h: string;
}

interface formProps {
  setAllQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
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
  })

  return (
    <form>
      <select 
        name="select-mood">
          {moods.map(mood => (
            <option >{mood.k}</option>
          ))}
        </select>
        
    </form>

  )
};

export default Form;