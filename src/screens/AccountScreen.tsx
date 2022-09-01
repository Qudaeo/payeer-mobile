import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {bottomTabs, defaultFont} from '../base/consts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ImageBackground from '../assets/svg/accountScreen/imageBackground';
import LogoIcon from '../assets/svg/accountScreen/logo.svg';
import LoginImage from '../assets/svg/accountScreen/loginImage.svg';
import {colors} from '../base/colors';

const AccountScreen = () => {
  const screenDimensions = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const screenHeight =
    screenDimensions.height - bottomTabs.height - insets.bottom;

  return (
    <>
      <ImageBackground width={screenDimensions.width} height={screenHeight} />
      <View
        style={[
          styles.container,
          {width: screenDimensions.width, height: screenHeight},
        ]}>
        <LogoIcon style={styles.logo} />
        <Text style={styles.logoText}>{'CRYPTO WALLET'}</Text>
        <LoginImage style={styles.mainImage} />
      </View>
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
  },
  logo: {
    marginTop: 64,
    marginLeft: 5,
  },
  logoText: {
    fontFamily: defaultFont.regular,
    marginTop: 6,
    fontSize: 11,
    color: colors.WHITE,
    opacity: 0.6,
    letterSpacing: 0.857143,
    lineHeight: 16,
  },
  mainImage: {
    marginTop: 29,
  },
});
