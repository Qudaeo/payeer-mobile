import {TCurrency} from './wallet';

type TWallet = {
  BTC: {
    amount: number;
    rate: number;
  };
};

export type TAmount = {
  amount: string;
  currency: TCurrency;
};

export type TExchange = {
  wallet: TWallet;
  sell: TAmount;
  buy: TAmount;
};
