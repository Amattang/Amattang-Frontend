import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicInfoOfCustomCheckList from './BasicInfoOfCustomCheckList';
import MoreInfoOfCustomCheckList from './MoreInfoOfCustomCheckList';
import MyItemsOfCustomCheckList from './MyItemsOfCustomCheckList';

const Tab = createMaterialTopTabNavigator();

function CreateCustomCheckList() {
  return (
    <>
      <Tab.Navigator screenOptions={{ swipeEnabled: false }}>
        <Tab.Screen name={'Basic'} component={BasicInfoOfCustomCheckList} />
        <Tab.Screen name={'More'} component={MoreInfoOfCustomCheckList} />
        <Tab.Screen name={'Item'} component={MyItemsOfCustomCheckList} />
      </Tab.Navigator>
    </>
  );
}

export default CreateCustomCheckList;
