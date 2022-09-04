import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {colors} from '../base/colors';
import commonStyles from '../base/commonStyles';
import WalletSheetHeader from './WalletSheetHeader';
import {mockWalletSummary} from '../mock/mockWalletSummary';
import WalletItem from './WalletItem';
import {bottomTabs, header} from '../base/consts';
import {TWalletItem} from '../types/wallet';

const WalletSheet = () => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = header.height + insets.top;
  const bottomTabsHeight = bottomTabs.height + insets.bottom;

  const renderItem = useCallback(
    ({item}: {item: TWalletItem}) => <WalletItem walletItem={item} />,
    [],
  );

  return (
    <View style={styles.container}>
      <WalletSheetHeader />
      <View style={{height: frame.height - headerHeight - bottomTabsHeight}}>
        <FlatList
          data={mockWalletSummary}
          keyExtractor={item => item.currency}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
          bounces={false}
          contentContainerStyle={[
            commonStyles.container,
            {width: frame.width, paddingBottom: bottomTabs.height + 10},
          ]}
        />
      </View>
    </View>
  );
};

export default WalletSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey_F4F4F4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  separator: {
    height: 8,
  },
});
