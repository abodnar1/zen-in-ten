import { Mood, QuoteInterface } from "./interfaces"

export const fetchAllQuoteKeywords = (): Promise<Mood[]> => {
  return fetch("api/keywords?key=11ef57ae8191dde524535934c158c4543950e06c")
  .then(response => response.json())
  .then(response => {
    return response as Mood[]
  })
}

export const fetchQuotesByKeyword = (keywordValue: string): Promise<QuoteInterface[]> => {
  return fetch(keywordValue)
  .then(response => response.json())
  .then(response => {
    return response as QuoteInterface[]
  })
}
