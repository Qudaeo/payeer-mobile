import React, {useState} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../base/colors';
import {defaultFont} from '../base/consts';
import {TAmount} from '../types/exchange';
import PayeerTouchableOpacity from './PayeerTouchableOpacity';
import ArrowDownIcon from '../assets/svg/exchangeScreen/arrowDown.svg';

interface IAmountEdit {
  amount: TAmount;
  setAmount: (amount: string) => void;
  style: StyleProp<ViewStyle>;
  title: string;
}

const AmountEdit = ({amount, setAmount, style, title}: IAmountEdit) => {
  const [edit, setEdit] = useState(false);

  return (
    <View style={[styles.container, style, edit && styles.containerEdit]}>
      <View
        style={[styles.amountContainer, edit && styles.amountContainerEdit]}>
        <Text style={[styles.title, edit && styles.black]}>{title}</Text>
        <TextInput
          value={amount.amount}
          onChangeText={setAmount}
          onFocus={() => setEdit(true)}
          onBlur={() => setEdit(false)}
          keyboardType={'numeric'}
          maxLength={12}
          style={[
            styles.textInput,
            Platform.OS === 'android' && styles.androidTextInput,
            edit && styles.black,
          ]}
        />
      </View>
      <PayeerTouchableOpacity
        onPress={() => {
          console.log('select');
        }}
        style={[styles.currencySelector, edit && styles.currencySelectorEdit]}>
        <View style={styles.selector}>
          <Text style={styles.currency}>{amount.currency}</Text>
          <ArrowDownIcon />
        </View>
      </PayeerTouchableOpacity>
    </View>
  );
};

export default AmountEdit;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 72,
    marginLeft: 30,
    marginRight: 29,
    borderRadius: 8,
    backgroundColor: colors.grey_F1F1F1,
  },
  containerEdit: {
    borderWidth: 2,
    backgroundColor: colors.white_FFFFFF,
  },
  amountContainer: {
    marginTop: 11,
    marginLeft: 17,
    flex: 1,
  },
  amountContainerEdit: {
    marginTop: 9,
    marginLeft: 15,
  },
  title: {
    fontFamily: defaultFont.semiBold,
    fontSize: 12,
    color: colors.grey_7B8AA6,
  },
  textInput: {
    fontFamily: defaultFont.bold,
    fontSize: 30,
    color: colors.grey_7B8AA6,
    marginLeft: -2,
  },
  androidTextInput: {
    marginTop: -12,
    marginLeft: -6,
  },
  black: {
    color: colors.black_262B34,
  },
  currencySelector: {
    width: 87,
    height: 45,
    marginTop: 13,
    marginRight: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey_F1F1F1,
    backgroundColor: colors.white_FFFFFF,
    overflow: 'hidden',
    justifyContent: 'center',
    paddingLeft: 24,
    paddingRight: 20,
  },
  currencySelectorEdit: {
    marginTop: 11,
    marginRight: 10,
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  currency: {
    fontFamily: defaultFont.bold,
    fontSize: 12,
    color: colors.black_262B34,
    marginRight: 12,
  },
});
