import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../base/colors';
import AmountEdit from '../components/AmountEdit';
import {useHeaderHeight} from '@react-navigation/elements';
import {mockExchange} from '../mock/mockExchange';

const ExchangeScreen = () => {
  const headerHeight = useHeaderHeight();
  const [state, setState] = useState(mockExchange);

  return (
    <>
      <View style={styles.background} />
      <AmountEdit
        amount={state.sell}
        setAmount={(newAmount: string) =>
          setState(prevState => {
            const nextState = {...prevState};
            nextState.sell.amount = newAmount;
            return nextState;
          })
        }
        title={'Продаю'}
        style={{marginTop: headerHeight + 10}}
      />
    </>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white_FFFFFF,
  },
});
