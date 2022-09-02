import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {borderWidth, bottomTabs, defaultFont} from '../base/consts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ImageBackground from '../assets/svg/accountScreen/ImageBackground';
import LogoIcon from '../assets/svg/accountScreen/logo.svg';
import LoginImage from '../assets/svg/accountScreen/loginImage.svg';
import {colors} from '../base/colors';
import commonStyles from '../base/commonStyles';
import Digits from '../components/Digits';
import {mockTotalUsersRegistered} from '../mock/mockTotalUsersRegistered';
import GradientButton from '../components/GradientButton';
import TransparentButton from '../components/TransparentButton';

const AccountScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalUsersRegistered, setTotalUsersRegistered] = useState(
    mockTotalUsersRegistered,
  );

  const insets = useSafeAreaInsets();
  const windowDimensions = Dimensions.get('window');

  const contentDimensions = {
    width: windowDimensions.width,
    height: windowDimensions.height - bottomTabs.height - insets.bottom,
  };

  return (
    <>
      <ImageBackground
        width={contentDimensions.width}
        height={contentDimensions.height}
      />
      <View style={[styles.container, contentDimensions]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
          bounces={false}
          contentContainerStyle={[
            commonStyles.container,
            styles.scrollView,
            {width: contentDimensions.width},
          ]}>
          <LogoIcon style={styles.logo} />
          <Text style={styles.logoText}>{'CRYPTO WALLET'}</Text>
          <LoginImage style={styles.mainImage} />
          <Text style={styles.welcomeText}>{'Welcome to Payeer'}</Text>
          <Text style={styles.totalUserRegisteredText}>
            {'TOTAL USERS REGISTERED'}
          </Text>
          <Digits number={totalUsersRegistered} style={styles.digits} />
          <GradientButton
            title={'CREATE ACCOUNT'}
            description={'IN LESS THEN 30 seconds'}
            onPress={() => {
              console.log('CREATE ACCOUNT');
            }}
            style={styles.createAccountButton}
            width={contentDimensions.width - 2 * borderWidth}
          />
          <Text style={styles.orText}>{'OR'}</Text>
          <TransparentButton
            title={'LOGIN'}
            description={'I HAVE AN ACCOUNT'}
            onPress={() => {
              console.log('LOGIN');
            }}
            width={contentDimensions.width - 2 * borderWidth}
          />
        </ScrollView>
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
  scrollView: {
    paddingTop: 64,
    paddingBottom: 16,
  },
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
  mainImage: {
    marginTop: 29,
  },
  welcomeText: {
    fontFamily: defaultFont.regular,
    marginTop: 27.75,
    fontSize: 21,
    color: colors.grey_F1F1F1,
    lineHeight: 26,
  },
  totalUserRegisteredText: {
    fontFamily: defaultFont.regular,
    marginTop: 5,
    fontSize: 10,
    color: colors.blue_A2EEFF,
    lineHeight: 12,
    textTransform: 'uppercase',
  },
  digits: {
    marginTop: 14,
  },
  createAccountButton: {
    marginTop: 28,
  },
  orText: {
    fontFamily: defaultFont.regular,
    marginTop: 10,
    marginBottom: 9,
    fontSize: 10,
    color: colors.blue_A1EEFF,
    lineHeight: 12.18,
  },
});
