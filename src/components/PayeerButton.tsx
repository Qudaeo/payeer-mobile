import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
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
  shadow?: boolean;
  type: 'green' | 'transparent';
}

const PayeerButton = ({
  title,
  description,
  onPress,
  width,
  style,
  shadow,
  type,
}: IGradientButton) => (
  <PayeerTouchableOpacity onPress={onPress} style={style}>
    <>
      {shadow && (
        <Shadow
          style={[styles.shadow, {width: width - 1, height: buttonHeight - 2}]}
          startColor={'rgba(14, 61, 9, 0.0953068)'}
          offset={[0, 4.09]}
        />
      )}
      <ButtonContent
        width={width}
        title={title}
        description={description}
        type={type}>
        <>
          {type === 'green' && (
            <GreenGradient width={width} height={buttonHeight} />
          )}
        </>
      </ButtonContent>
    </>
  </PayeerTouchableOpacity>
);

export default PayeerButton;

const styles = StyleSheet.create({
  shadow: {
    position: 'absolute',
    top: 0,
    left: 1,
    borderRadius: 8,
  },
});
