import React from 'react';
import {Dimensions, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {buttonHeight} from '../base/consts';
import GreenGradient from '../assets/svg/gradientButton/GreenGradient';
import ButtonContent from './ButtonContent';
import PayeerTouchableOpacity from './PayeerTouchableOpacity';

interface IGradientButton {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = ({title, onPress, style}: IGradientButton) => {
  const screenWidth = Dimensions.get('screen').width;

  return (
    <PayeerTouchableOpacity onPress={onPress} style={style}>
      <ButtonContent
        width={screenWidth}
        title={title}
        type={'green'}
        style={styles.container}>
        <GreenGradient width={screenWidth} height={buttonHeight} />
      </ButtonContent>
    </PayeerTouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
});
