import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';

import RootNav from './navigation/Main/RootNav';
import OnBoardingStack from './navigation/OnBoarding/StackNavigationOfOnBoarding';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // splash screen
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  useEffect(() => {
    // setIsLogin();
  }, []);

  return (
    <>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          {isLogin ? <RootNav /> : <OnBoardingStack setIsLogin={setIsLogin} />}
        </GestureHandlerRootView>
      </NavigationContainer>
    </>
  );
}

export default App;
