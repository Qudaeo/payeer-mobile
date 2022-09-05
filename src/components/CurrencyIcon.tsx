import React from 'react';
import {TCurrency} from '../types/wallet';
import BTC from '../assets/svg/currency/BTC.svg';
import ETH from '../assets/svg/currency/ETH.svg';
import BCH from '../assets/svg/currency/BCH.svg';
import LTC from '../assets/svg/currency/LTC.svg';
import USD from '../assets/svg/currency/USD.svg';
import EUR from '../assets/svg/currency/EUR.svg';
import RUB from '../assets/svg/currency/RUB.svg';
import Unknown from '../assets/svg/currency/unknown.svg';
import {StyleProp, View, ViewStyle} from 'react-native';

interface ICurrencyIcon {
  name: TCurrency;
  style: StyleProp<ViewStyle>;
}

const CurrencyIcon = ({name, style}: ICurrencyIcon) => {
  const GetIcon = () => {
    switch (name) {
      case 'BTC': {
        return <BTC />;
      }
      case 'ETH': {
        return <ETH />;
      }
      case 'BCH': {
        return <BCH />;
      }
      case 'LTC': {
        return <LTC />;
      }
      case 'USD': {
        return <USD />;
      }
      case 'EUR': {
        return <EUR />;
      }
      case 'RUB': {
        return <RUB />;
      }
      default: {
        return <Unknown />;
      }
    }
  };

  return (
    <View style={style}>
      <GetIcon />
    </View>
  );
};

export default CurrencyIcon;
