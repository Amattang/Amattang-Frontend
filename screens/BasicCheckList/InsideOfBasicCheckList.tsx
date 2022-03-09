import React from 'react';
import { Pressable } from 'react-native';
import BasicCheckListComponents from '../../components/BasicCheckListComponents';

function InsideOfBasicCheckList() {
  return (
    <Pressable>
      <BasicCheckListComponents />
    </Pressable>
  );
}

export default InsideOfBasicCheckList;
