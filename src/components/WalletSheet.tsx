import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {colors} from '../base/colors';
import commonStyles from '../base/commonStyles';
import WalletSheetHeader from './WalletSheetHeader';

const WalletSheet = () => {
  const frame = useSafeAreaFrame();

  return (
    <View style={styles.container}>
      <WalletSheetHeader />
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
  );
};

export default WalletSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey_F4F4F4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
  },
  scrollView: {
    paddingTop: 64,
    paddingBottom: 16,
  },
});
