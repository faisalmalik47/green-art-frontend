import request from "lib/request";

export const appDashboardData = async (pair: string) => {
  const { data } = await request.get(`/app-dashboard/${pair}`);
  return data;
};

export const buyLimitApp = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/buy-limit-app`, {
    amount,
    price,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
// buy - market - app;
export const buyMarketApp = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/buy-market-app`, {
    amount,
    price,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
// buy - stop - limit - app;
export const buyStopLimitApp = async (
  amount: number,
  total: number,
  limit: number,
  stop: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/buy-stop-limit-app`, {
    amount,
    total,
    limit,
    stop,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
