import { Mood, QuoteInterface, DailyQuoteInterface } from "./interfaces"

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

export const fetchDailyQuote = (): Promise<DailyQuoteInterface[]> => {
  return fetch("/api/toda?key=11ef57ae8191dde524535934c158c4543950e06c")
  .then(response => response.json())
  .then(response => {
    return response as DailyQuoteInterface[]
  })
}
