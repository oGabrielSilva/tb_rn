import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import TBContextProvider from './context';
import Router from './router/router';
import SplashScreen from './screens/SplashScreen';
import { colorsDark } from './utils/template';

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 1000);
  }, []);

  return (
    <TBContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorsDark.primary}
      />
      {(splash && <SplashScreen />) || <Router />}
    </TBContextProvider>
  );
};

export default App;
