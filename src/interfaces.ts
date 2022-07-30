export interface QuoteInterface {
  q: string;
  a: string;
  i: string;
  h?: string;
  c?: string;
}

export interface Mood {
  k: string;
  l: string;
}

export interface DailyQuoteInterface {
  q: string;
  a: string;
  h?: string;
}

export interface FormProps {
	setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
}