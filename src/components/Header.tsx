import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LogoIcon from '../assets/svg/accountScreen/logo.svg';
import HeaderButtons from './HeaderButtons';

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{marginTop: insets.top + 15}, styles.container]}>
      <LogoIcon width={114.09} height={(114.09 * 26) / 127} />
      <HeaderButtons />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 16,
    paddingBottom: 11,
  },
});
