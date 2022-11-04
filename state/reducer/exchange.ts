import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExchangeState = {
  dashboard: any;
  currentPair: string;
  OpenBookBuy: Array<any>;
  OpenBooksell: Array<any>;
  openOrderHistory: Array<any>;
  sellOrderHistory: Array<any>;
  buyOrderHistory: Array<any>;
  total_volume: number;
  tradeOrderHistory: Array<any>;
  publicTradesDashboard: Array<any>;
  marketTrades: Array<any>;
};
const initialState: ExchangeState = {
  dashboard: {},
  currentPair: "",
  total_volume: 0,
  OpenBookBuy: [],
  OpenBooksell: [],
  openOrderHistory: [],
  sellOrderHistory: [],
  buyOrderHistory: [],
  tradeOrderHistory: [],
  publicTradesDashboard: [],
  marketTrades: [],
};

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setSellPrice: (state: any, action: any) => {
      state.dashboard.order_data.sell_price = action.payload;
    },
    setBuyPrice: (state: any, action: any) => {
      state.dashboard.order_data.buy_price = action.payload;
    },
    setTotalVolume: (state: any, action: any) => {
      state.total_volume = action.payload;
    },
    setDashboard: (state: any, action: PayloadAction<ExchangeState>) => {
      state.dashboard = action.payload;
    },
    setCurrentPair: (state: any, action: PayloadAction<string>) => {
      state.currentPair = action.payload;
    },
    setPairs: (state: any, action: PayloadAction<string>) => {
      state.dashboard.pairs = action.payload;
    },
    setOpenBookBuy: (state: any, action: PayloadAction<Array<any>>) => {
      state.OpenBookBuy = action.payload;
    },
    setLastPriceData: (state: any, action: PayloadAction<Array<any>>) => {
      state.dashboard.last_price_data = action.payload;
    },
    setOpenBooksell: (state: any, action: PayloadAction<Array<any>>) => {
      state.OpenBooksell = action.payload;
    },
    setOpenOrderHistory: (state: any, action: PayloadAction<Array<any>>) => {
      state.openOrderHistory = action.payload;
    },
    setOrderData: (state: any, action: any) => {
      state.dashboard.order_data = {
        ...state.dashboard.order_data,
        base_coin: action.payload?.base_coin,
        base_coin_id: action.payload?.base_coin_id,
        exchange_coin_pair: action.payload?.exchange_coin_pair,
        exchange_pair: action.payload?.exchange_pair,
        fees: action.payload?.fees,
        total: action.payload?.total,
        trade_coin: action.payload?.trade_coin,
        trade_coin_id: action.payload?.trade_coin_id,
        on_order: action.payload?.on_order,
      };
    },
    setSellOrderHistory: (state: any, action: PayloadAction<Array<any>>) => {
      state.sellOrderHistory = action.payload;
    },
    setBuyOrderHistory: (state: any, action: PayloadAction<Array<any>>) => {
      state.buyOrderHistory = action.payload;
    },
    setTradeOrderHistory: (state: any, action: PayloadAction<Array<any>>) => {
      state.tradeOrderHistory = action.payload;
    },
    setPublicTradesDashboard: (
      state: any,
      action: PayloadAction<Array<any>>
    ) => {
      state.publicTradesDashboard = action.payload;
    },
    setAllmarketTrades: (state: any, action: PayloadAction<Array<any>>) => {
      state.marketTrades = action.payload;
    },
  },
});

export const {
  setSellPrice,
  setBuyPrice,
  setDashboard,
  setCurrentPair,
  setOpenBookBuy,
  setLastPriceData,
  setOrderData,
  setOpenBooksell,
  setOpenOrderHistory,
  setSellOrderHistory,
  setBuyOrderHistory,
  setTradeOrderHistory,
  setPublicTradesDashboard,
  setAllmarketTrades,
  setPairs,
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
