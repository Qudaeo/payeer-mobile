import {TCurrency} from './wallet';

type TWallet = {
  [key in TCurrency]?: {
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
