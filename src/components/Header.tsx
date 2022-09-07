import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LogoIcon from '../assets/svg/accountScreen/logo.svg';
import HeaderButtons from './HeaderButtons';

const Header = () => {
  const insets = useSafeAreaInsets();

  const fadeAnim = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={[
        {marginTop: insets.top + 15},
        styles.container,
        {opacity: fadeAnim},
      ]}>
      <LogoIcon width={114.09} height={(114.09 * 26) / 127} />
      <HeaderButtons />
    </Animated.View>
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
