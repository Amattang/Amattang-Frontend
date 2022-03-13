import React, { Dispatch, SetStateAction } from 'react';
import { Pressable } from 'react-native';
import BasicCheckListComponents from '../../components/BasicCheckListComponents';

interface IProps {
  isEdit: boolean;
  setIsBottomSheet: Dispatch<SetStateAction<boolean>>;
  isBottomSheet: boolean;
}

function InsideOfBasicCheckList({ isEdit, isBottomSheet, setIsBottomSheet }: IProps) {
  return (
    <Pressable>
      <BasicCheckListComponents />
    </Pressable>
  );
}

export default InsideOfBasicCheckList;
