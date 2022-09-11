import React, {useEffect, useMemo} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ImageBackground from '../assets/svg/accountScreen/ImageBackground';
import Logo from '../components/Logo';
import {colors} from '../base/colors';

interface ISplashScreen {
  setLoaded: (loaded: boolean) => void;
}

const progressWidth = 120;

const SplashScreen = ({setLoaded}: ISplashScreen) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const animatedProgressWidth = useMemo(() => new Animated.Value(0), []);
  const animatedOpacityTop = useMemo(() => new Animated.Value(0), []);
  const animatedOpacityBottom = useMemo(() => new Animated.Value(0), []);

  const duration = 2000;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedProgressWidth, {
        toValue: progressWidth,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacityTop, {
        toValue: -230,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacityBottom, {
        toValue: 165,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setLoaded(true);
    });
  }, [
    animatedOpacityBottom,
    animatedOpacityTop,
    animatedProgressWidth,
    setLoaded,
  ]);

  return (
    <>
      <ImageBackground width={frame.width} height={frame.height} />
      <View style={[styles.container, frame]}>
        <Animated.View
          style={[
            styles.initialOpacityTopPosition,
            {transform: [{translateX: animatedOpacityTop}]},
          ]}>
          <Image
            source={require('../assets/svg/splashScreen/opacityTop.png')}
            style={{width: (1700 * 331) / 512, height: (512 * 331) / 512}}
          />
        </Animated.View>
        <Logo />
        <Animated.View
          style={[
            styles.initialOpacityBottomPosition,
            {transform: [{translateX: animatedOpacityBottom}]},
          ]}>
          <Image
            source={require('../assets/svg/splashScreen/opacityBottom.png')}
            style={{width: (1700 * 331) / 512, height: (512 * 331) / 512}}
          />
        </Animated.View>
        <View
          style={[
            styles.progressPosition,
            {bottom: 20 + insets.bottom},
            styles.progressContainer,
          ]}>
          <Animated.View
            style={[styles.progressLine, {width: animatedProgressWidth}]}
          />
        </View>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPosition: {
    position: 'absolute',
  },
  progressContainer: {
    width: progressWidth,
    height: 1,
    backgroundColor: colors.white_FFFFFF40,
  },
  progressLine: {
    position: 'absolute',
    width: 20,
    height: 1,
    backgroundColor: colors.white_FFFFFF,
    opacity: 1,
  },
  initialOpacityTopPosition: {
    position: 'absolute',
    top: -121.41,
    left: -362.5,
  },
  initialOpacityBottomPosition: {
    position: 'absolute',
    bottom: 20.41,
    left: -539,
  },
});
