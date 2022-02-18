import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomNav from './MainBottomNav';
import CheckListStackNav from './CheckListStackNav';

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: 'fullScreenModal', headerShown: false }}>
    <Nav.Screen name="Tabs" component={MainBottomNav} />
    <Nav.Screen name="Stacks" component={CheckListStackNav} />
  </Nav.Navigator>
);
export default Root;
