import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigation from './BottomNavigation/BottomNavigation';
import CheckListStackNav from './StackNavigation/StackNavigationOfCheckList';

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: 'fullScreenModal', headerShown: false }}>
    <Nav.Screen name="Tab" component={BottomNavigation} />
    <Nav.Screen name="Stack" component={CheckListStackNav} />
  </Nav.Navigator>
);
export default Root;
