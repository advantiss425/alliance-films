import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { AppContainer } from '@screens';

const App: () => React$Node = props => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' backgroundColor={"rgba(7, 24, 101, 1)"} />
      <AppContainer />
    </SafeAreaProvider>
  );  
}

export default App;
