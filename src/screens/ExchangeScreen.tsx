import React, {useCallback, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../base/colors';
import AmountEdit from '../components/AmountEdit';
import {useHeaderHeight} from '@react-navigation/elements';
import {mockExchange} from '../mock/mockExchange';
import {bottomTabs, defaultFont} from '../base/consts';
import PayeerTouchableOpacity from '../components/PayeerTouchableOpacity';
import Graph from '../assets/svg/accountScreen/Graph';
import ArrowTop from '../assets/svg/accountScreen/arrowTop.svg';
import commonStyles from '../base/commonStyles';
import {numberToCurrencyString} from '../base/helper';
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ExchangeScreen = () => {
  const headerHeight = useHeaderHeight();
  const [state, setState] = useState(mockExchange);
  const insets = useSafeAreaInsets();

  const calcBuyAmount = useCallback(() => {
    setState(prevState => {
      const nextState = {...prevState};
      nextState.buy.amount = (
        +nextState.sell.amount *
        (nextState.wallet[nextState.sell.currency]?.rate || 0)
      ).toFixed(2);
      return nextState;
    });
  }, []);

  const editSellAmount = (newAmount: string) => {
    setState(prevState => {
      const nextState = {...prevState};
      nextState.sell.amount = newAmount;
      return nextState;
    });

    calcBuyAmount();
  };

  const handleBalanceAmountTouch = () => {
    setState(prevState => {
      const nextState = {...prevState};
      nextState.sell.amount = (
        nextState.wallet[state.sell.currency]?.amount || 0
      ).toString();
      return nextState;
    });

    calcBuyAmount();
  };

  useEffect(() => {
    calcBuyAmount();
  }, [calcBuyAmount]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[
        styles.background,
        {
          marginBottom:
            bottomTabs.height + (Platform.OS === 'ios' ? insets.bottom : 0),
        },
      ]}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{marginTop: headerHeight + 10}}>
        <AmountEdit
          amount={state.sell}
          setAmount={editSellAmount}
          title={'Продаю'}
          editable={true}
        />
        <View style={styles.block}>
          <View style={styles.blockRow}>
            <Text style={styles.text}>{'Баланс'}</Text>
            <PayeerTouchableOpacity onPress={handleBalanceAmountTouch}>
              <Text style={styles.amountText}>{`${
                state.wallet[state.sell.currency]?.amount
              } ${state.sell.currency}`}</Text>
            </PayeerTouchableOpacity>
          </View>
          <View style={[styles.blockRow, commonStyles.marginTop17]}>
            <Text style={styles.text}>{'Курс'}</Text>
            <View style={styles.exchangePrice}>
              <View style={[commonStyles.row, commonStyles.container]}>
                <ArrowTop />
                <Text style={styles.priceText}>
                  {`$${numberToCurrencyString(
                    state.wallet[state.sell.currency]?.rate || 0,
                  )}`}
                </Text>
              </View>
              <Graph color={colors.green_4CAF50} />
            </View>
          </View>
        </View>
        <AmountEdit
          amount={state.buy}
          title={'Покупаю'}
          style={commonStyles.marginTop13}
        />
        <View style={styles.block}>
          <View style={styles.blockRow}>
            <Text style={styles.text}>{'Баланс'}</Text>
            <PayeerTouchableOpacity onPress={handleBalanceAmountTouch}>
              <Text style={styles.amountText}>{`${state.wallet[
                state.buy.currency
              ]?.amount.toFixed(2)} ${state.buy.currency}`}</Text>
            </PayeerTouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {+state.sell.amount > 0 &&
        +state.sell.amount <=
          (state.wallet[state.sell.currency]?.amount || 0) && (
          <Button
            onPress={() => {
              console.log('ОБМЕНЯТЬ');
            }}
            title={'ОБМЕНЯТЬ'}
          />
        )}
    </KeyboardAvoidingView>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white_FFFFFF,
  },
  block: {
    marginLeft: 47,
    marginRight: 44,
  },
  blockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
    alignItems: 'center',
  },
  text: {
    fontFamily: defaultFont.semiBold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey_7B8AA6,
  },
  amountText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.blue_03A9F4,
  },
  exchangePrice: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 7,
  },
  priceText: {
    fontFamily: defaultFont.semiBold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.green_70BF73,
  },
});
