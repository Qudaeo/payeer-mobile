import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {bottomTabs} from '../base/consts';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ImageBackground from '../assets/svg/accountScreen/ImageBackground';
import Header from '../components/Header';
import {colors} from '../base/colors';
import WalletSheet from '../components/WalletSheet';

const WalletScreen = () => {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();

  return (
    <>
      <ImageBackground
        width={frame.width}
        height={
          frame.height -
          bottomTabs.height -
          (Platform.OS === 'ios' ? insets.bottom : 0)
        }
      />
      <View style={[styles.container, frame]}>
        <Header />
        <WalletSheet />
      </View>
    </>
  );
};

export default WalletScreen;

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
  contentContainer: {
    backgroundColor: colors.grey_F4F4F4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
