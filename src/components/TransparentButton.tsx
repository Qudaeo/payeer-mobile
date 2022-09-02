import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import commonStyles from '../base/commonStyles';
import {colors} from '../base/colors';
import {defaultFont} from '../base/consts';
import ChevronRight from '../assets/svg/gradientButton/chevronRight.svg';

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
  const height = 56;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>
      <View style={[styles.container, {width, height}]}>
        <View style={[StyleSheet.absoluteFillObject, commonStyles.container]}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.chevronRight}>
          <ChevronRight />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2.04,
    borderColor: colors.white_FFFFFF,
  },
  titleText: {
    fontFamily: defaultFont.bold,
    fontSize: 12,
    color: colors.white_FFFFFF,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  descriptionText: {
    marginTop: 3,
    fontFamily: defaultFont.regular,
    fontSize: 10,
    color: colors.blue_A1EEFF,
    textTransform: 'uppercase',
  },
  chevronRight: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 16,
  },
});
