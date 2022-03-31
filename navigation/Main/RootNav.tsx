import React, { Dispatch, SetStateAction } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigation from './BottomNavigation/BottomNavigation';
import CheckListStackNav from './StackNavigation/StackNavigationOfCheckList';
import { RootStackProps } from '../../types/navigationTypes';

const RootNav = createNativeStackNavigator<RootStackProps>();

interface IProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Root = ({ setIsLogin }: IProps) => (
  <RootNav.Navigator screenOptions={{ headerShown: false }}>
    <RootNav.Screen name="tab" component={BottomNavigation} />
    <RootNav.Screen name="stack" children={() => <CheckListStackNav setIsLogin={setIsLogin} />} />
  </RootNav.Navigator>
);
export default Root;
