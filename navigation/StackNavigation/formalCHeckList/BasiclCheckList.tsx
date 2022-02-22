import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BasicInfoOfBasicCheckList from '../../../screens/formalCheckList/BasicInfoOfBasicCheckList';
import OutsideOfBasicCheckList from '../../../screens/formalCheckList/OutsideOfBasicCheckList';
import InsideOfBasicCheckList from '../../../screens/formalCheckList/InsideOfBasicCheckList';
import OptionOfBasicCheckList from '../../../screens/formalCheckList/OptionOfBasicCheckList';

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
          component={OptionOfBasicCheckList}
          options={{ title: '옵션' }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BasicCheckList;
