import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoardingStackParamsList, OnBoardingStackProps } from '../../types/navigationTypes';
import Login from '../../screens/landing/Login';
import OnBoarding from '../../screens/landing/OnBoarding';
import Landing from '../../screens/landing/Landing';
import { Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator<OnBoardingStackParamsList>();

function OnBoardingStack() {
  const navigation = useNavigation<OnBoardingStackProps>();

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
        component={Login}
        options={{
          headerTransparent: true,
          headerTitle: '',
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
          headerTitle: '',
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
