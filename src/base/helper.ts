export const numberToCurrencyString = (num: number) =>
  num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
