import React from 'react';
import { Pressable } from 'react-native';
import BasicCheckListComponents from '../../components/BasicCheckListComponents';

interface IProps {
  isEdit: boolean;
}

function InsideOfBasicCheckList({ isEdit }: IProps) {
  return (
    <Pressable>
      <BasicCheckListComponents />
    </Pressable>
  );
}

export default InsideOfBasicCheckList;
