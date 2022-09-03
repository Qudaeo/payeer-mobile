import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UsdIcon from '../assets/svg/currency/USD.svg';
import {defaultFont} from '../base/consts';
import {colors} from '../base/colors';

const WalletSheetHeader = () => (
  <View style={styles.container}>
    <View style={styles.balanceContainer}>
      <UsdIcon width={32} height={32} />
      <View style={styles.balanceBlock}>
        <Text style={styles.balanceTitlePart1Text}>
          {'TOTAL '}
          <Text style={styles.balanceTitlePart2Text}>{'Balance'}</Text>
        </Text>
        <Text style={styles.balanceText}>{'$0.00'}</Text>
      </View>
    </View>
  </View>
);

export default WalletSheetHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 21,
  },
  balanceContainer: {
    flexDirection: 'row',
  },
  balanceBlock: {
    marginLeft: 7,
  },
  balanceTitlePart1Text: {
    fontFamily: defaultFont.bold,
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.160105,
    color: colors.grey_7B8AA6,
  },
  balanceTitlePart2Text: {
    fontFamily: defaultFont.regular,
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.160105,
    color: colors.grey_7B8AA6,
  },
  balanceText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.black_262B34,
  },
});
