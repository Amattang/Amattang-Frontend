import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import RootNav from './navigation/Main/RootNav';
import OnBoardingStack from './navigation/OnBoarding/StackNavigationOfOnBoarding';

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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {isLogin ? <RootNav /> : <OnBoardingStack setIsLogin={setIsLogin} />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
