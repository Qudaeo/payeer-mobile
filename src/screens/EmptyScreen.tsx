import React from 'react';
import {Text, View} from 'react-native';
import commonStyles from '../base/commonStyles';

const EmptyScreen = (name: string) => () =>
  (
    <View style={[commonStyles.flex1, commonStyles.container]}>
      <Text>{name}</Text>
    </View>
  );

export default EmptyScreen;
