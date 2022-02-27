import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BasicInfoOfBasicCheckList from '../../../screens/BasicCheckList/BasicInfoOfBasicCheckList';
import OutsideOfBasicCheckList from '../../../screens/BasicCheckList/OutsideOfBasicCheckList';
import InsideOfBasicCheckList from '../../../screens/BasicCheckList/InsideOfBasicCheckList';
import MyItemOfBasicCheckList from '../../../screens/BasicCheckList/MyItemOfBasicCheckList';

const Tab = createMaterialTopTabNavigator();

function BasicCheckList() {
  return (
    <>
      <Tab.Navigator screenOptions={{ swipeEnabled: false }}>
        <Tab.Screen
          name="basic"
          component={BasicInfoOfBasicCheckList}
          options={{ title: '기본 정보' }}
        />
        <Tab.Screen
          name={'outside'}
          component={OutsideOfBasicCheckList}
          options={{ title: '외부 시설' }}
        />
        <Tab.Screen
          name={'inside'}
          component={InsideOfBasicCheckList}
          options={{ title: '내부 시설' }}
        />
        <Tab.Screen
          name={'option'}
          component={MyItemOfBasicCheckList}
          options={{ title: '내 항목' }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BasicCheckList;
