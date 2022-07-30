export interface QuoteInterface {
  q: string;
  a: string;
  i: string;
  h?: string;
  c?: string;
}

export interface QuoteCardProps {
  quote: string;
  author: string;
  image: string;
  id: string;
	favList: QuoteInterface[];
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
}

export interface QuotesProps {
  allQuotes: QuoteInterface[];
  setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>
	favList: QuoteInterface[];
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>
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

export interface FavoriteCardProps {
  quote: string,
  author: string,
	image: string,
  setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
	favList: QuoteInterface[];
  id: string
}

export interface FavoriteProps {
	setFavList: React.Dispatch<React.SetStateAction<QuoteInterface[]>>;
	favList: QuoteInterface[];
}

export interface NavProps {
  setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>
}