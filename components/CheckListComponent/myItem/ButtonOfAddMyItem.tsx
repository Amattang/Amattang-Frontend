import React, { Dispatch, SetStateAction } from 'react';
import { myItemType } from '../../../types/checkListTypes';
import { Pressable } from 'react-native';
import { DefaultText } from '../../../CustomText';
import styles from '../styles';

interface IProps {
  setMyItems: Dispatch<SetStateAction<myItemType[]>>;
  eachMyItemHandler: (MyItemData: myItemType | null) => void;
  myItem: myItemType | null;
  isEdit: boolean;
}

function ButtonOfAddMyItem({ eachMyItemHandler, myItem, isEdit }: IProps) {
  const onCreateMyItemHandler = () => {
    isEdit && eachMyItemHandler(myItem);
  };
  return (
    <Pressable onPress={onCreateMyItemHandler} style={styles.myItemInputBox}>
      <DefaultText style={styles.checkListGrayText}>새 그룹</DefaultText>
      <DefaultText style={styles.checkListGrayText}>+ Add</DefaultText>
    </Pressable>
  );
}

export default ButtonOfAddMyItem;
