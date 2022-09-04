import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../base/colors';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {TWalletItem} from '../types/wallet';
import CurrencyIcon from './CurrencyIcon';

interface IWalletItem {
  walletItem: TWalletItem;
}

const WalletItem = ({walletItem}: IWalletItem) => {
  const frame = useSafeAreaFrame();
  const width = frame.width - 2 * 12;

  return (
    <View
      style={[
        styles.container,
        {width},
        walletItem.currency === 'BTC' && styles.btcBackground,
      ]}>
      <CurrencyIcon name={walletItem.currency} />
    </View>
  );
};

export default WalletItem;

const styles = StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: colors.white_FFFFFF,
    borderRadius: 12,
  },
  btcBackground: {
    backgroundColor: colors.grey_E9E9E9,
  },
});
