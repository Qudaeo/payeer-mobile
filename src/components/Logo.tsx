import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {defaultFont} from '../base/consts';
import {colors} from '../base/colors';
import LogoIcon from '../assets/svg/logo/logo.svg';

interface ILogo {}

const Logo = ({}: ILogo) => (
  <>
    <LogoIcon style={styles.logo} />
    <Text style={styles.logoText}>{'CRYPTO WALLET'}</Text>
  </>
);

export default Logo;

const styles = StyleSheet.create({
  logo: {
    marginLeft: 5,
  },
  logoText: {
    fontFamily: defaultFont.regular,
    marginTop: 6,
    fontSize: 11,
    color: colors.white_FFFFFF,
    opacity: 0.6,
    letterSpacing: 0.857143,
    lineHeight: 16,
  },
});
