import { Mood } from "./interfaces"

export const fetchQuotes = (): Promise<Mood[]> => {
  return fetch("api/keywords?key=11ef57ae8191dde524535934c158c4543950e06c")
  .then(response => response.json())
  .then(response => {
    return response as Mood[]
  })
}