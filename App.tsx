import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={'dark-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
