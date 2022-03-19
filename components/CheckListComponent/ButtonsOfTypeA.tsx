import React, { Dispatch, SetStateAction } from 'react';
import { Alert, Pressable, View } from 'react-native';
import { answerButtonOfType, checkListTypes } from '../../types/checkListTypes';
import styles from './styles';
import { DefaultText } from '../../CustomText';

interface IProps {
  isEdit: boolean;
  checkList: checkListTypes;
  checkLists: checkListTypes[];
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function ButtonsOfTypeA({ isEdit, checkList, setCheckLists, checkLists }: IProps) {
  const onPressHandler = (answer: answerButtonOfType) => {
    isEdit &&
      setCheckLists(
        checkLists.map((questionItem) =>
          questionItem.questionId === checkList.questionId
            ? ({
                ...questionItem,
                answer: [
                  ...questionItem.answer.map((answerItem) =>
                    answerItem.type === answer.type
                      ? { ...answerItem, val: true }
                      : { ...answerItem, val: false }
                  ),
                ],
              } as checkListTypes)
            : ({ ...questionItem } as checkListTypes)
        )
      );
  };

  return (
    <>
      {checkList.answer.map((answer) => (
        <Pressable
          onPress={() => onPressHandler(answer)}
          style={
            checkList?.answer.length < 3
              ? answer.val
                ? answer.redType
                  ? [styles.typeABtnWrapper, styles.checkListFocusedOrange]
                  : [styles.typeABtnWrapper, styles.checkListFocusedBlue]
                : [styles.typeABtnWrapper]
              : answer.val
              ? answer.redType
                ? [styles.typeAExtendedBtnWrapper, styles.checkListFocusedOrange]
                : [styles.typeAExtendedBtnWrapper, styles.checkListFocusedBlue]
              : [styles.typeAExtendedBtnWrapper]
          }
        >
          <View>
            <DefaultText style={answer.val ? styles.checkListWhiteText : styles.checkListGrayText}>
              {answer.type}
            </DefaultText>
          </View>
        </Pressable>
      ))}
    </>
  );
}

export default ButtonsOfTypeA;
