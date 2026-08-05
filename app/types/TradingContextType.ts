type TradingContextType = {
  cash: number;
  holdings: Holding[];
  trades: Trade[];

  portfolioValue: number;
  totalProfit: number;

  watchlist: string[];

  addToWatchlist: (
    symbol: string
  ) => void;

  removeFromWatchlist: (
    symbol: string
  ) => void;

  buyStock: (
    symbol: string,
    quantity: number,
    price: number
  ) => void;

  sellStock: (
    symbol: string,
    quantity: number,
    price: number
  ) => void;
};