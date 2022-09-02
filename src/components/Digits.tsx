import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Digit from './Digit';

interface IDigits {
  totalUsersRegistered: number;
  style: StyleProp<ViewStyle>;
}

const Digits = ({totalUsersRegistered, style}: IDigits) => {
  const digits = totalUsersRegistered.toString(10).split('');

  const marginLeft = (index: number) =>
    (digits.length - index) % 3 === 0 ? 10 : 2;

  return (
    <View style={[styles.container, style]}>
      {digits.map((digit, index) => (
        <Digit
          key={index}
          digit={digit}
          style={index > 0 && {marginLeft: marginLeft(index)}}
        />
      ))}
    </View>
  );
};

export default Digits;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
});
