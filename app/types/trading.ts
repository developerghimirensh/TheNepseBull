export type Holding = {
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
};

export type Trade = {
  id: string;
  symbol: string;
  type: "BUY" | "SELL";
  quantity: number;
  price: number;
  timestamp: string;
};