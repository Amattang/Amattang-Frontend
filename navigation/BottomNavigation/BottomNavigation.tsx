import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/bottomTab/Home';
import Vote from '../../screens/bottomTab/Vote';
import CheckListBtn from '../../components/CheckListBtn';

function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <CheckListBtn />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Vote'} component={Vote} />
      </Tab.Navigator>
    </>
  );
}

export default BottomNavigation;
