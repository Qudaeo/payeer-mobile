import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyScreen = (name: string) => () =>
  (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
