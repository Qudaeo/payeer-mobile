import React, {useEffect, useRef, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Digit from './Digit';

interface IDigits {
  number?: number;
  style?: StyleProp<ViewStyle>;
}

const AnimatedDigits = ({number, style}: IDigits) => {
  const [counter, setCounter] = useState(number);
  const incrementId = useRef<number | undefined>(undefined);

  const timeChangeInterval = 30;

  useEffect(() => {
    if ((counter || 0) < (number || 0) && !incrementId.current) {
      incrementId.current = setInterval(() => {
        setCounter(c => (c || 0) + 1);
      }, timeChangeInterval);
    }
  }, [counter, number, timeChangeInterval]);

  useEffect(() => {
    if (counter === number && incrementId.current) {
      clearInterval(incrementId.current);
      incrementId.current = undefined;
    }
  }, [counter, number]);

  const digits = counter?.toString(10).split('') || [];

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

export default AnimatedDigits;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
});
