import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../base/colors';

const ExchangeScreen = () => {
  return (
    <>
      <View style={styles.background} />
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
