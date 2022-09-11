import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={'dark-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        {loaded ? <BottomTabs /> : <SplashScreen setLoaded={setLoaded} />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
