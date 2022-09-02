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
import {Shadow} from 'react-native-shadow-2';

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
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>
      <Shadow startColor={'rgba(14, 61, 9, 0.0953068)'} offset={[0, 4.09]}>
        <View style={[styles.container, {width, height}]}>
          <GreenGradient width={width} height={height} />
          <View style={[StyleSheet.absoluteFillObject, commonStyles.container]}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
          <View style={styles.chevronRight}>
            <ChevronRight />
          </View>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
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
