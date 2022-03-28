import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import RootNav from './navigation/Main/RootNav';
import OnBoardingStack from './navigation/OnBoarding/StackNavigationOfOnBoarding';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { getAccessToken, getRefreshToken, isLoggedIn } from 'react-native-axios-jwt';
import { QueryClient, QueryClientProvider } from 'react-query';
import CheckListStore from './Context/CheckListByServer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KakaoLoginBtn from './components/Login/KakaoLoginBtn';
import axios from 'axios';

const queryClient = new QueryClient();

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // splash screen
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  useEffect(() => {
    async function handleLogin() {
      if (await isLoggedIn()) {
        const accessToken = await getAccessToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        setIsLogin(true);
      }
    }
    handleLogin();
  }, []);

  return (
    <>
      <CheckListStore>
        <NavigationContainer independent={true}>
          <BottomSheetModalProvider>
            <QueryClientProvider client={queryClient}>
              {isLogin ? <RootNav /> : <OnBoardingStack setIsLogin={setIsLogin} />}
            </QueryClientProvider>
          </BottomSheetModalProvider>
        </NavigationContainer>
      </CheckListStore>
    </>
  );
}

export default App;
