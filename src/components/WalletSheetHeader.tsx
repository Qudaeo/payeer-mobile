import React from 'react';
import {StyleSheet, View} from 'react-native';
import BalanceTotal from './BalanceTotal';
import SearchButton from './SearchButton';

const WalletSheetHeader = () => (
  <View style={styles.container}>
    <BalanceTotal total={0} />
    <SearchButton />
  </View>
);

export default WalletSheetHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 15.54,
    paddingLeft: 21,
    paddingRight: 12,
  },
});
