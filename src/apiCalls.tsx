import { Mood, QuoteInterface, DailyQuoteInterface } from "./interfaces"

export const fetchAllQuoteKeywords = (): Promise<Mood[]> => {
  return fetch(`https://zenquotes.io/api/keywords/${process.env.REACT_APP_API_KEY}`)
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

export const fetchDailyQuote = (): Promise<DailyQuoteInterface[]> => {
  return fetch(`https://zenquotes.io/api/today/${process.env.REACT_APP_API_KEY}`)
  .then(response => response.json())
  .then(response => {
    return response as DailyQuoteInterface[]
  })
}
