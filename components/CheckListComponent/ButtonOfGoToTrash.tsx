import React, { Dispatch, SetStateAction } from 'react';
import { Alert, Image, Pressable } from 'react-native';
import Animated, { SharedValue, withTiming } from 'react-native-reanimated';
import { checkListTypes } from '../../types/checkListTypes';
import styles from './styles';

interface IProps {
  translateX: SharedValue<number>;
  rStyle: { transform: { translateX: number }[] };
  isEdit: boolean;
  checkList: checkListTypes;
  checkLists: checkListTypes[];
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function ButtonOfGoToTrash({
  translateX,
  rStyle,
  isEdit,
  checkList,
  setCheckLists,
  checkLists,
}: IProps) {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const onDeleteHandler = async () => {
    translateX.value = withTiming(0);
    isEdit &&
      setTimeout(() => {
        setCheckLists(
          checkLists.map((item) =>
            item.questionId === checkList.questionId
              ? { ...item, deleted: !item.deleted }
              : { ...item }
          )
        );
      }, 500);
  };

  return (
    <AnimatedPressable style={[rStyle, styles.trashButton]} onPress={onDeleteHandler}>
      <Image source={require('../../assets/images/checkList/trash.png')} />
    </AnimatedPressable>
  );
}

export default ButtonOfGoToTrash;
