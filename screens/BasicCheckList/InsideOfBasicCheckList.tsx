import React from 'react';
import { Pressable } from 'react-native';
import { DefaultText } from '../../CustomText';

function InsideOfBasicCheckList() {
  return (
    <Pressable>
      <DefaultText>내부항목</DefaultText>
    </Pressable>
  );
}

export default InsideOfBasicCheckList;
