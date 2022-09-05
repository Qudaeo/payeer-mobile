export type TCurrency = 'BTC' | 'ETH' | 'BCH' | 'LTC' | 'USD' | 'EUR' | 'RUB';

export type TWalletItem = {
  currency: TCurrency;
  name: string;
  total: number;
  usdTotal: number;
  profit: number;
  price: number;
};
