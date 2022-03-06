import React, { Dispatch, SetStateAction } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoardingStackParamsList, OnBoardingStackProps } from '../../types/navigationTypes';
import Login from '../../screens/landing/Login';
import OnBoarding from '../../screens/landing/OnBoarding';
import Landing from '../../screens/landing/Landing';
import { Image, Pressable } from 'react-native';
import Map from '../../screens/landing/Map';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator<OnBoardingStackParamsList>();

interface IProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

function OnBoardingStack({ setIsLogin }: IProps) {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        children={() => <Login setIsLogin={setIsLogin} />}
        options={{
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/common/leftArrow.png')} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="onBoarding"
        component={OnBoarding}
        options={{
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/common/leftArrow.png')} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="map"
        component={Map}
        options={{
          animation: 'slide_from_bottom',
          headerTitle: '지도에서 위치 확인',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/common/leftArrow.png')} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default OnBoardingStack;
