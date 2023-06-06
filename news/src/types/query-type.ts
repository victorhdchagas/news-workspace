export type NewsApiParams = {
  q: string;
  sources?: string;
  excludeDomains: string;
  from: string;
  to: string;
  language?:
    | "ar"
    | "de"
    | "en"
    | "es"
    | "fr"
    | "he"
    | "it"
    | "nl"
    | "no"
    | "pt"
    | "ru"
    | "sv"
    | "ud"
    | "zh";
  sortBy?: "relevancy" | "popularity" | "publishedAt" | "relevancy";
  pageSize: string;
  page: string;
};
