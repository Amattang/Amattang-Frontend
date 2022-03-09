import React, { Dispatch, SetStateAction } from 'react';
import { Alert, Pressable, View } from 'react-native';
import { answerButtonOfType, checkList } from '../../types/checkListTypes';
import styles from './styles';
import { DefaultText } from '../../CustomText';

interface IProps {
  isEdit: boolean;
  mainQuestionItem: checkList;
  checkLists: checkList[];
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
}

function ButtonsOfTypeA({ isEdit, mainQuestionItem, setCheckLists, checkLists }: IProps) {
  const onPressHandler = (answer: answerButtonOfType) => {
    isEdit
      ? setCheckLists(
          checkLists.map((questionItem) =>
            questionItem.questionId === mainQuestionItem.questionId
              ? ({
                  ...questionItem,
                  answer: {
                    ans: [
                      ...questionItem.answer.ans.map((answerItem) =>
                        answerItem.type === answer.type
                          ? { ...answerItem, val: true }
                          : { ...answerItem, val: false }
                      ),
                    ],
                  },
                } as checkList)
              : ({ ...questionItem } as checkList)
          )
        )
      : Alert.alert('읽기상태입니다!', '오른쪽 아래 버튼을 눌러주세요');
  };

  return (
    <>
      {mainQuestionItem.answer.ans.map((answer) => (
        <Pressable
          onPress={() => onPressHandler(answer)}
          style={
            mainQuestionItem.answer.ans.length < 2
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
