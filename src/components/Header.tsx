import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LogoIcon from '../assets/svg/logo/logo.svg';
import HeaderButtons from './HeaderButtons';
import {useIsFocused} from '@react-navigation/native';

const Header = () => {
  const insets = useSafeAreaInsets();
  const initialOpacity = 0.6;
  const fadeAnim = useRef(new Animated.Value(initialOpacity)).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(initialOpacity);
    }
  }, [fadeAnim, isFocused]);

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
