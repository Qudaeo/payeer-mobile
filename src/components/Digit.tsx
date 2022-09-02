import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import DigitHolderIcon from '../assets/svg/accountScreen/digitHolder.svg';
import {defaultFont} from '../base/consts';
import {colors} from '../base/colors';

interface IDigit {
  digit: string;
  style?: StyleProp<ViewStyle>;
}

const Digit = ({digit, style}: IDigit) => (
  <View style={style}>
    <DigitHolderIcon />
    <View style={styles.textContainer}>
      <Text style={styles.digitText}>{digit}</Text>
    </View>
  </View>
);

export default Digit;

const styles = StyleSheet.create({
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  digitText: {
    position: 'absolute',
    top: '15%',
    fontFamily: defaultFont.regular,
    fontSize: 21,
    color: colors.grey,
  },
});
