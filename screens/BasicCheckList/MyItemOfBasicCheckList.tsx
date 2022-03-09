import React from 'react';
import { Pressable } from 'react-native';
import { DefaultText } from '../../CustomText';

interface IProps {
  isEdit: boolean;
}

function MyItemOfBasicCheckList({ isEdit }: IProps) {
  return (
    <Pressable>
      <DefaultText>내 항목</DefaultText>
    </Pressable>
  );
}

export default MyItemOfBasicCheckList;
