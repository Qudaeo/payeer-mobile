import React, {ReactElement, useEffect, useMemo} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

interface IAnimatedSlideUp {
  children: ReactElement;
  style: StyleProp<ViewStyle>;
}

const AnimatedSlideUp = ({children, style}: IAnimatedSlideUp) => {
  const frame = useSafeAreaFrame();
  const windowHeight = frame.height;

  const animated = useMemo(
    () => new Animated.Value(windowHeight),
    [windowHeight],
  );
  const duration = 300;

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }).start();
    } else {
      animated.setValue(windowHeight);
    }
  }, [animated, isFocused, windowHeight]);

  return (
    <Animated.View style={[style, {transform: [{translateY: animated}]}]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedSlideUp;
