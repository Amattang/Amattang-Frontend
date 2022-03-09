import React, { Dispatch, SetStateAction, useState } from 'react';
import { Alert, Pressable, TextInput } from 'react-native';
import { answerButtonOfType, checkList } from '../../types/checkListTypes';
import styles from './styles';
import { DefaultText } from '../../CustomText';

interface IProps {
  isEdit: boolean;
  mainQuestionItem: checkList;
  checkLists: checkList[];
  setCheckLists: Dispatch<SetStateAction<checkList[]>>;
}

function ButtonsOfTypeD({ isEdit, mainQuestionItem, setCheckLists, checkLists }: IProps) {
  const [newCheckListElement, setNewCheckListElement] = useState('');

  const onChangeTextHandler = (newElement: string) => {
    isEdit
      ? setNewCheckListElement(newElement)
      : Alert.alert('읽기상태입니다!', '오른쪽 아래 버튼을 눌러주세요');
  };

  const onEndEditing = async () => {
    newCheckListElement &&
      (await setCheckLists(
        checkLists.map((questionItem) =>
          questionItem.questionId === mainQuestionItem.questionId
            ? ({
                ...questionItem,
                answer: {
                  ans: [...questionItem.answer.ans, { type: newCheckListElement, val: true }],
                },
              } as checkList)
            : ({ ...questionItem } as checkList)
        )
      ));
    await setNewCheckListElement('');
  };

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
                          ? { ...answerItem, val: !answerItem.val }
                          : { ...answerItem }
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
          onPress={() => {
            onPressHandler(answer);
          }}
          style={
            answer.val
              ? [styles.typeDBtnWrapper, styles.checkListFocusedBlue]
              : [styles.typeDBtnWrapper]
          }
        >
          <DefaultText style={answer.val ? styles.checkListWhiteText : styles.checkListGrayText}>
            {answer.type}
          </DefaultText>
        </Pressable>
      ))}
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeTextHandler}
        onEndEditing={onEndEditing}
        placeholder={'+ 직접 입력'}
        value={newCheckListElement}
        style={styles.typeDBtnWrapper}
      />
    </>
  );
}

export default ButtonsOfTypeD;
