import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import RootNav from './navigation/RootNav';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </>
  );
}

export default App;
