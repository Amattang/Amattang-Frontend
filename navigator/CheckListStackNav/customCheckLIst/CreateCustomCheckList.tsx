import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicInfoOfCustomCheckList from './outsideOfCustomCheckListNavigation/BasicInfoOfCustomCheckList';
import MoreInfoOfCustomCheckList from './outsideOfCustomCheckListNavigation/MoreInfoOfCustomCheckList';
import MyItemsOfCustomCheckList from './outsideOfCustomCheckListNavigation/MyItemsOfCustomCheckList';

const Tab = createMaterialTopTabNavigator();

function CreateCustomCheckList() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name={'Basic'} component={BasicInfoOfCustomCheckList} />
        <Tab.Screen name={'More'} component={MoreInfoOfCustomCheckList} />
        <Tab.Screen name={'Item'} component={MyItemsOfCustomCheckList} />
      </Tab.Navigator>
    </>
  );
}

export default CreateCustomCheckList;
