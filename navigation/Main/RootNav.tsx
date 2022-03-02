import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigation from './BottomNavigation/BottomNavigation';
import CheckListStackNav from './StackNavigation/StackNavigationOfCheckList';
import { RootStackProps } from '../../types/navigationTypes';

const RootNav = createNativeStackNavigator<RootStackProps>();

const Root = () => (
  <RootNav.Navigator screenOptions={{ presentation: 'fullScreenModal', headerShown: false }}>
    <RootNav.Screen name="tab" component={BottomNavigation} />
    <RootNav.Screen name="stack" component={CheckListStackNav} />
  </RootNav.Navigator>
);
export default Root;
