import React from 'react';
import { Alert, Image, Pressable } from 'react-native';
import { DefaultText } from '../../../CustomText';
import {
  myItemClickHandlerType,
  myItemElementType,
  myItemType,
} from '../../../types/checkListTypes';
import styles from '../styles';

interface IProps {
  myItemElement: myItemElementType;
  elementClickedHandler: ({ myItem, myItemElement }: myItemClickHandlerType) => void;
  myItem: myItemType;
  isEdit: boolean;
}

function MyItemElement({ myItemElement, elementClickedHandler, myItem, isEdit }: IProps) {
  const myItemElementOnPressHandler = () =>
    isEdit
      ? elementClickedHandler({ myItem, myItemElement })
      : Alert.alert('읽기상태입니다!', '추가하기를 취소하고 오른쪽 아래 버튼을 눌러주세요');
  return (
    <Pressable onPress={myItemElementOnPressHandler} style={styles.myItemDetailElementWrapper}>
      {myItemElement.checked ? (
        <Image source={require('../../../assets/images/checkList/checkedCheckBox.png')} />
      ) : (
        <Image source={require('../../../assets/images/checkList/unCheckedCheckBox.png')} />
      )}
      <DefaultText style={styles.myItemDetailElementText}>{myItemElement.content}</DefaultText>
    </Pressable>
  );
}

export default MyItemElement;
