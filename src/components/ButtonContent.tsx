import React, {ReactElement} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import commonStyles from '../base/commonStyles';
import {colors} from '../base/colors';
import {buttonHeight, defaultFont} from '../base/consts';
import ChevronRight from '../assets/svg/gradientButton/chevronRight.svg';

interface IButtonContent {
  children?: ReactElement;
  width: number;
  title: string;
  description: string;
  containerStyle?: StyleProp<ViewStyle>;
  descriptionTextStyle: StyleProp<TextStyle>;
}

const ButtonContent = ({
  children,
  width,
  title,
  description,
  containerStyle,
  descriptionTextStyle,
}: IButtonContent) => (
  <View
    style={[styles.container, containerStyle, {width, height: buttonHeight}]}>
    {children}
    <View style={[StyleSheet.absoluteFillObject, commonStyles.container]}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={[styles.descriptionText, descriptionTextStyle]}>
        {description}
      </Text>
    </View>
    <View style={styles.chevronRight}>
      <ChevronRight />
    </View>
  </View>
);

export default ButtonContent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
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
    textTransform: 'uppercase',
  },
  chevronRight: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 16,
  },
});
