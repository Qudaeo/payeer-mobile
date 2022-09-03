import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../base/colors';
import ButtonContent from './ButtonContent';
import PayeerTouchableOpacity from './PayeerTouchableOpacity';

interface ITransparentButton {
  title: string;
  description: string;
  onPress: () => void;
  width: number;
  style?: StyleProp<ViewStyle>;
}

const TransparentButton = ({
  title,
  description,
  onPress,
  width,
  style,
}: ITransparentButton) => {
  return (
    <PayeerTouchableOpacity onPress={onPress} style={style}>
      <ButtonContent
        width={width}
        title={title}
        description={description}
        descriptionTextStyle={styles.descriptionText}
        containerStyle={styles.container}
      />
    </PayeerTouchableOpacity>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2.04,
    borderColor: colors.white_FFFFFF,
  },
  descriptionText: {
    color: colors.blue_A1EEFF,
  },
});
