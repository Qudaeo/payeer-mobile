import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import commonStyles from './src/base/styles';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={'dark-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <SafeAreaView style={commonStyles.flex1} edges={['bottom']}>
          <BottomTabs />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
