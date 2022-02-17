import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCustomCheckList from './CheckListStackNav/CreateCustomCheckList';
import CreateFormalCheckList from './CheckListStackNav/CreateFormalCheckList';

const NativeStack = createNativeStackNavigator();

function CheckListModal() {
  return (
    <>
      <NativeStack.Navigator>
        <NativeStack.Screen name="custom" component={CreateCustomCheckList} />
        <NativeStack.Screen name="formal" component={CreateFormalCheckList} />
      </NativeStack.Navigator>
    </>
  );
}

export default CheckListModal;
