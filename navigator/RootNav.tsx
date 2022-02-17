import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomNav from './MainBottomNav';
import CheckListModal from './CheckListModal';

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
    <Nav.Screen name="Tabs" component={MainBottomNav} />
    <Nav.Screen name="Stack" component={CheckListModal} />
  </Nav.Navigator>
);
export default Root;
