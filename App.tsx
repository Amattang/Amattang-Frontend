import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import RootNav from './navigation/Main/RootNav';
import OnBoardingStack from './navigation/OnBoarding/StackNavigationOfOnBoarding';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { isLoggedIn } from 'react-native-axios-jwt';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // splash screen
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  useEffect(() => {
    async function handleLogin() {
      if (await isLoggedIn()) {
        setIsLogin(true);
      }
    }
    handleLogin();
  }, []);

  return (
    <>
      <NavigationContainer independent={true}>
        <BottomSheetModalProvider>
          {isLogin ? <RootNav /> : <OnBoardingStack setIsLogin={setIsLogin} />}
        </BottomSheetModalProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
