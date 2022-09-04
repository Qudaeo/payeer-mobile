import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../base/colors';
import SearchIcon from '../assets/svg/search.svg';
import commonStyles from '../base/commonStyles';

const SearchButton = () => (
  <View>
    <TextInput
      placeholder={'Search Coin...'}
      style={styles.container}
      placeholderTextColor={colors.grey_909090}
    />
    <View style={[commonStyles.container, styles.searchIcon]}>
      <SearchIcon />
    </View>
  </View>
);

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 170,
    height: 36,
    backgroundColor: colors.grey_ECE8E8,
    borderRadius: 51,
    paddingLeft: 20,
    paddingRight: 50,
    paddingVertical: 0,
  },
  searchIcon: {
    position: 'absolute',
    right: 9.54,
    height: '100%',
  },
});
