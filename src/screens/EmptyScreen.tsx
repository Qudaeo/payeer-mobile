import React from 'react';
import {Text, View} from 'react-native';
import commonStyles from '../base/commonStyles';

const EmptyScreen = (name: string) => () =>
  (
    <View style={commonStyles.container}>
      <Text>{name}</Text>
    </View>
  );

export default EmptyScreen;
