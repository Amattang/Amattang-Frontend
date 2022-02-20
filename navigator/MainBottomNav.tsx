import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './mainBottomNav/Home';
import Vote from './mainBottomNav/Vote';
import CheckListBtn from './CheckListBtn';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feed } from './mainBottomNav/drawer/DrawerNavigation';

function MainBottomNav() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <CheckListBtn />
      <Tab.Navigator>
        <Tab.Screen
          name={'Home'}
          component={Home}
          options={() => ({
            headerLeft: () => <Text>not work need to fix</Text>,
          })}
        />
        <Tab.Screen name={'Vote'} component={Vote} />
      </Tab.Navigator>
    </>
  );
}

export default MainBottomNav;
