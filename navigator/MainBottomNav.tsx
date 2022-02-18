import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './mainBottomNav/Home';
import Vote from './mainBottomNav/Vote';

const Tab = createBottomTabNavigator();

function MainBottomNav() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Vote'} component={Vote} />
      </Tab.Navigator>
    </>
  );
}

export default MainBottomNav;
