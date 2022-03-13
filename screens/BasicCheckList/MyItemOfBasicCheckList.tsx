import React, { Dispatch, SetStateAction } from 'react';
import { Pressable } from 'react-native';
import { DefaultText } from '../../CustomText';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
  isBottomSheet: boolean;
}

function MyItemOfBasicCheckList({ isEdit, isBottomSheet, setIsBottomSheet }: IProps) {
  return (
    <Pressable>
      <DefaultText>내 항목</DefaultText>
    </Pressable>
  );
}

export default MyItemOfBasicCheckList;
