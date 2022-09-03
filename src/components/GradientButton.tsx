import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../base/colors';
import {buttonHeight} from '../base/consts';
import GreenGradient from '../assets/svg/gradientButton/GreenGradient';
import {Shadow} from 'react-native-shadow-2';
import ButtonContent from './ButtonContent';
import PayeerTouchableOpacity from './PayeerTouchableOpacity';

interface IGradientButton {
  title: string;
  description: string;
  onPress: () => void;
  width: number;
  style?: StyleProp<ViewStyle>;
}

const GradientButton = ({
  title,
  description,
  onPress,
  width,
  style,
}: IGradientButton) => (
  <PayeerTouchableOpacity onPress={onPress} style={style}>
    <Shadow startColor={'rgba(14, 61, 9, 0.0953068)'} offset={[0, 4.09]}>
      <ButtonContent
        children={<GreenGradient width={width} height={buttonHeight} />}
        width={width}
        title={title}
        description={description}
        descriptionTextStyle={styles.descriptionText}
      />
    </Shadow>
  </PayeerTouchableOpacity>
);

export default GradientButton;

const styles = StyleSheet.create({
  descriptionText: {
    color: colors.green_98FF83,
  },
});
