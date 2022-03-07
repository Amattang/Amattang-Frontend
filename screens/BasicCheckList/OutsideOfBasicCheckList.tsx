import React from 'react';
import { Pressable } from 'react-native';
import { DefaultText } from '../../CustomText';

function OutsideOfBasicCheckList() {
  return (
    <Pressable>
      <DefaultText>외부항목</DefaultText>
    </Pressable>
  );
}

export default OutsideOfBasicCheckList;
