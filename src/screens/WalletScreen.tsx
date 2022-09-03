import React from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import {bottomTabs} from '../base/consts';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ImageBackground from '../assets/svg/accountScreen/ImageBackground';
import commonStyles from '../base/commonStyles';
import Header from '../components/Header';

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
          bounces={false}
          contentContainerStyle={[
            commonStyles.container,
            styles.scrollView,
            {width: frame.width},
          ]}
        />
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
});
