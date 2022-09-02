import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {bottomTabs, defaultFont} from '../base/consts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ImageBackground from '../assets/svg/accountScreen/imageBackground';
import LogoIcon from '../assets/svg/accountScreen/logo.svg';
import LoginImage from '../assets/svg/accountScreen/loginImage.svg';
import {colors} from '../base/colors';
import commonStyles from '../base/commonStyles';
import Digits from '../components/Digits';
import {mockTotalUsersRegistered} from '../mock/mockTotalUsersRegistered';

const AccountScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalUsersRegistered, setTotalUsersRegistered] = useState(
    mockTotalUsersRegistered,
  );

  const insets = useSafeAreaInsets();
  const windowDimensions = Dimensions.get('window');

  const screenDimensions = {
    width: windowDimensions.width,
    height: windowDimensions.height - bottomTabs.height - insets.bottom,
  };

  return (
    <>
      <ImageBackground
        width={screenDimensions.width}
        height={screenDimensions.height}
      />
      <View
        style={[
          styles.container,
          {width: screenDimensions.width, height: screenDimensions.height},
        ]}>
        <ScrollView contentContainerStyle={commonStyles.container}>
          <LogoIcon style={styles.logo} />
          <Text style={styles.logoText}>{'CRYPTO WALLET'}</Text>
          <LoginImage style={styles.mainImage} />
          <Text style={styles.welcomeText}>{'Welcome to Payeer'}</Text>
          <Text style={styles.totalUserRegisteredText}>
            {'TOTAL USERS REGISTERED'}
          </Text>
          <Digits
            totalUsersRegistered={totalUsersRegistered}
            style={styles.digits}
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
  logo: {
    marginTop: 64,
    marginLeft: 5,
  },
  logoText: {
    fontFamily: defaultFont.regular,
    marginTop: 6,
    fontSize: 11,
    color: colors.white,
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
    color: colors.grey,
    lineHeight: 26,
  },
  totalUserRegisteredText: {
    fontFamily: defaultFont.regular,
    marginTop: 5,
    fontSize: 10,
    color: colors.blue,
    lineHeight: 12,
    textTransform: 'uppercase',
  },
  digits: {
    marginTop: 14,
  },
});
