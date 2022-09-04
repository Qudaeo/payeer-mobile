import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UsdIcon from '../assets/svg/currency/USD.svg';
import {defaultFont} from '../base/consts';
import {colors} from '../base/colors';

interface IBalanceTotal {
  total: number;
}

const BalanceTotal = ({total}: IBalanceTotal) => (
  <View style={styles.container}>
    <UsdIcon width={32} height={32} />
    <View style={styles.block}>
      <Text style={styles.titlePart1Text}>
        {'TOTAL '}
        <Text style={styles.titlePart2Text}>{'Balance'}</Text>
      </Text>
      <Text style={styles.totalText}>{`${total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}`}</Text>
    </View>
  </View>
);

export default BalanceTotal;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  block: {
    marginLeft: 7,
    marginTop: 1,
  },
  titlePart1Text: {
    fontFamily: defaultFont.bold,
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.160105,
    color: colors.grey_7B8AA6,
  },
  titlePart2Text: {
    fontFamily: defaultFont.regular,
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.160105,
    color: colors.grey_7B8AA6,
  },
  totalText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 14,
    color: colors.black_262B34,
  },
});
