import React, {ReactElement, useEffect, useMemo} from 'react';
import {Animated, Dimensions, StyleProp, ViewStyle} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

interface IAnimatedSlideUp {
  children: ReactElement;
  style: StyleProp<ViewStyle>;
}

const AnimatedSlideUp = ({children, style}: IAnimatedSlideUp) => {
  const windowHeight = Dimensions.get('window').height;

  const animated = useMemo(
    () => new Animated.Value(windowHeight),
    [windowHeight],
  );
  const duration = 500;

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
