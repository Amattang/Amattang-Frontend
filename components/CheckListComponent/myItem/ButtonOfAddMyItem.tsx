import React, { Dispatch, SetStateAction } from 'react';
import { myItemType } from '../../../types/checkListTypes';
import { Alert, Pressable } from 'react-native';
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
    isEdit
      ? eachMyItemHandler(myItem)
      : Alert.alert('읽기상태입니다!', '추가하기를 취소하고 오른쪽 아래 버튼을 눌러주세요');
  };
  return (
    <Pressable onPress={onCreateMyItemHandler} style={styles.myItemInputBox}>
      <DefaultText style={styles.checkListGrayText}>새 그룹</DefaultText>
      <DefaultText style={styles.checkListGrayText}>+ Add</DefaultText>
    </Pressable>
  );
}

export default ButtonOfAddMyItem;
