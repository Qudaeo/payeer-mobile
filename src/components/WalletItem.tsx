import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../base/colors';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {TWalletItem} from '../types/wallet';
import CurrencyIcon from './CurrencyIcon';
import {defaultFont} from '../base/consts';
import commonStyles from '../base/commonStyles';
import Graph from '../assets/svg/accountScreen/Graph';
import StarIcon from '../assets/svg/accountScreen/star.svg';
import ArrowTop from '../assets/svg/accountScreen/arrowTop.svg';
import PayeerTouchableOpacity from './PayeerTouchableOpacity';

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
      <View style={styles.currencyBlock}>
        <CurrencyIcon name={walletItem.currency} style={styles.currencyIcon} />
        <View style={styles.walletSummary}>
          <View style={commonStyles.row}>
            <Text style={styles.totalText}>{walletItem.total.toFixed(2)}</Text>
            <Text style={styles.currencyText}>{walletItem.currency}</Text>
          </View>
          <View style={commonStyles.row}>
            <Text style={styles.nameText}>{walletItem.name}</Text>
            <Text
              style={[
                styles.profitText,
                walletItem.profit < 0 && styles.profitRedText,
              ]}>{`${walletItem.profit < 0 ? '' : '+'}${
              walletItem.profit
            }%`}</Text>
          </View>
          <Text style={styles.usdTotalText}>{`${walletItem.usdTotal.toFixed(
            2,
          )} USD`}</Text>
        </View>
      </View>
      <View style={commonStyles.row}>
        <View style={styles.graph}>
          <Graph
            color={
              walletItem.profit < 0 ? colors.red_EF4712 : colors.green_4CAF50
            }
          />
          <View style={commonStyles.row}>
            <ArrowTop />
            <Text
              style={[
                styles.priceText,
                {
                  color:
                    walletItem.profit < 0
                      ? colors.red_EF4712
                      : colors.green_4CAF50,
                },
              ]}>
              {walletItem.price.toFixed(2)}
            </Text>
          </View>
        </View>
        <PayeerTouchableOpacity
          style={styles.favorite}
          onPress={() => {
            console.log(`${walletItem.currency} to favorite`);
          }}>
          <StarIcon />
        </PayeerTouchableOpacity>
      </View>
    </View>
  );
};

export default WalletItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 68,
    backgroundColor: colors.white_FFFFFF,
    borderRadius: 12,
  },
  btcBackground: {
    backgroundColor: colors.grey_E9E9E9,
  },
  currencyBlock: {
    flexDirection: 'row',
  },
  currencyIcon: {
    marginLeft: 14,
    marginTop: 12,
  },
  walletSummary: {
    marginTop: 10,
    marginLeft: 12,
  },
  totalText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 16,
    lineHeight: 20,
    color: colors.black_262B34,
  },
  currencyText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 14,
    lineHeight: 20,
    color: colors.grey_7B8AA6,
    marginLeft: 3,
  },
  nameText: {
    fontFamily: defaultFont.regular,
    fontSize: 10,
    lineHeight: 13,
    color: colors.grey_7B8AA6,
  },
  profitText: {
    fontFamily: defaultFont.bold,
    fontSize: 10,
    lineHeight: 13,
    color: colors.green_70BF73,
    marginLeft: 3,
  },
  profitRedText: {
    color: colors.red_EF4712,
  },
  usdTotalText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 10,
    lineHeight: 17,
    color: colors.grey_7B8AA6,
  },
  favorite: {
    marginTop: 27,
    marginRight: 13,
    marginLeft: 12.68,
  },
  graph: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  priceText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 3,
  },
});
