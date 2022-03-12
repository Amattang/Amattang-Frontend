import React from 'react';
import { Pressable } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from './styles';

interface IProps {
  handlePresentModalPress: () => void;
}

function ButtonOfBringBackDeletedCheckList({ handlePresentModalPress }: IProps) {
  return (
    <Pressable
      onPress={handlePresentModalPress}
      style={[styles.whiteCard, styles.buttonOfbottomSheet]}
    >
      <DefaultText style={styles.blueText}>+ 추가하기</DefaultText>
    </Pressable>
  );
}

export default ButtonOfBringBackDeletedCheckList;
