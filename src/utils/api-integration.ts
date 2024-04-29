export const API_ENDPOINTS = {
  AUTH: {},
  PRIVATE: {},
  PUBLIC: {
    GET_GRAPH_DATA: "v3/coins/ethereum/market_chart?vs_currency=usd",
  },
} as const;

export const QUERIES_KEY = {
  AUTH: {},
  PRIVATE: {},
  PUBLIC: {},
} as const;
