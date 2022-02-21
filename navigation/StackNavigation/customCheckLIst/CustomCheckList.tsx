import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BasicInfoOfCustomCheckList from '../../../screens/customCheckList/BasicInfoOfCustomCheckList';
import MoreInfoOfCustomCheckList from '../../../screens/customCheckList/MoreInfoOfCustomCheckList';
import MyItemOfCustomCheckList from '../../../screens/customCheckList/MyItemOfCustomCheckList';

const Tab = createMaterialTopTabNavigator();

function CustomCheckList() {
  return (
    <>
      <Tab.Navigator screenOptions={{ swipeEnabled: false }}>
        <Tab.Screen
          name={'basic'}
          component={BasicInfoOfCustomCheckList}
          options={{ title: '기본 정보' }}
        />
        <Tab.Screen
          name={'more'}
          component={MoreInfoOfCustomCheckList}
          options={{ title: '상세 정보' }}
        />
        <Tab.Screen
          name={'item'}
          component={MyItemOfCustomCheckList}
          options={{ title: '내 항목' }}
        />
      </Tab.Navigator>
    </>
  );
}

export default CustomCheckList;
