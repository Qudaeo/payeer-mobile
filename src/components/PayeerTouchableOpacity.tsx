import React, {ReactElement} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {buttonsActiveOpacity} from '../base/consts';

interface IPayeerTouchableOpacity {
  children: ReactElement;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const PayeerTouchableOpacity = ({
  children,
  onPress,
  style,
}: IPayeerTouchableOpacity) => (
  <TouchableOpacity
    activeOpacity={buttonsActiveOpacity}
    onPress={onPress}
    style={style}>
    {children}
  </TouchableOpacity>
);

export default PayeerTouchableOpacity;
