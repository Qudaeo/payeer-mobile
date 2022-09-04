export type TCurrency = 'BTC' | 'ETH' | 'BCH' | 'LTC' | 'USD' | 'EUR' | 'RUB';

export type TWalletItem = {
  currency: TCurrency;
  total: number;
  usdTotal: number;
};
