import {TExchange} from '../types/exchange';

export const mockExchange: TExchange = {
  wallet: {
    BTC: {
      amount: 0.245432,
      rate: 33204.15,
    },
    USDT: {
      amount: 0,
      rate: 0,
    },
  },
  sell: {
    amount: '0.12531',
    currency: 'BTC',
  },
  buy: {
    amount: '245.42',
    currency: 'USDT',
  },
};
