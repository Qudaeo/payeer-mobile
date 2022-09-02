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
import GreenGradient from '../assets/svg/gradientButton/GreenGradient';

interface IGradientButton {
  title: string;
  description: string;
  onPress: () => void;
  width: number;
  style: StyleProp<ViewStyle>;
}

const GradientButton = ({
  title,
  description,
  onPress,
  width,
  style,
}: IGradientButton) => {
  const height = 56;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        commonStyles.container,
        styles.container,
        {width, height},
        style,
      ]}>
      <View style={[StyleSheet.absoluteFillObject]}>
        <GreenGradient width={width} height={height} />
      </View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={styles.chevronRight}>
        <ChevronRight />
      </View>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  titleText: {
    fontFamily: defaultFont.bold,
    fontSize: 12,
    color: colors.white,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  descriptionText: {
    marginTop: 3,
    fontFamily: defaultFont.regular,
    fontSize: 12,
    color: colors.green,
    textTransform: 'uppercase',
  },
  chevronRight: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 16,
  },
});
