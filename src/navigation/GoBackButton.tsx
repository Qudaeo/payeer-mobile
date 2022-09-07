import React from 'react';
import PayeerTouchableOpacity from '../components/PayeerTouchableOpacity';
import commonStyles from '../base/commonStyles';
import ArrowLeftIcon from '../assets/svg/exchangeScreen/arrowLeft.svg';
import {StyleSheet} from 'react-native';
import {colors} from '../base/colors';
import {marginHorizontalWidth} from '../base/consts';
import {useNavigation} from '@react-navigation/native';

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <PayeerTouchableOpacity
      onPress={navigation.goBack}
      style={[commonStyles.container, styles.goBackButton]}>
      <ArrowLeftIcon />
    </PayeerTouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  goBackButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.grey_F1F1F1,
    marginLeft: marginHorizontalWidth,
  },
});
