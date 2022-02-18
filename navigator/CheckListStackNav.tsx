import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCustomCheckList from './CheckListStackNav/customCheckLIst/CreateCustomCheckList';
import CreateFormalCheckList from './CheckListStackNav/formalCHeckList/CreateFormalCheckList';

const NativeStack = createNativeStackNavigator();

function CheckListStackNav() {
  return (
    <>
      <NativeStack.Navigator>
        <NativeStack.Screen name="custom" component={CreateCustomCheckList} />
        <NativeStack.Screen name="formal" component={CreateFormalCheckList} />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListStackNav;
