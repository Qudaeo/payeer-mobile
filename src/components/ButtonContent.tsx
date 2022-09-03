import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyles from '../base/commonStyles';
import {colors} from '../base/colors';
import {buttonHeight, defaultFont} from '../base/consts';
import ChevronRight from '../assets/svg/gradientButton/chevronRight.svg';

interface IButtonContent {
  children?: ReactElement;
  width: number;
  title: string;
  description: string;
  type: 'green' | 'transparent';
}

const ButtonContent = ({
  children,
  width,
  title,
  description,
  type,
}: IButtonContent) => (
  <View
    style={[
      styles.container,
      type === 'transparent' && styles.containerTransparent,
      {width, height: buttonHeight},
    ]}>
    {children}
    <View style={[StyleSheet.absoluteFillObject, commonStyles.container]}>
      <Text style={styles.titleText}>{title}</Text>
      <Text
        style={[
          styles.descriptionText,
          type === 'green' && styles.descriptionTextGreen,
          type === 'transparent' && styles.descriptionTextTransparent,
        ]}>
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
  descriptionTextGreen: {
    color: colors.green_98FF83,
  },
  descriptionTextTransparent: {
    color: colors.blue_A1EEFF,
  },
  containerTransparent: {
    borderWidth: 2.04,
    borderColor: colors.white_FFFFFF,
  },
});
