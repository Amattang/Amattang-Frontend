import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/bottomTab/Home';
import Vote from '../../screens/bottomTab/Vote';
import CheckListBtn from '../../components/CheckListBtn';
import { BottomTabParams } from '../navigationTypes';

const Tab = createBottomTabNavigator<BottomTabParams>();

function BottomNavigation() {
  return (
    <>
      <CheckListBtn />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={'home'} component={Home} />
        <Tab.Screen name={'vote'} component={Vote} />
      </Tab.Navigator>
    </>
  );
}

export default BottomNavigation;
