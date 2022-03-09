import React, { Dispatch, SetStateAction, useState } from 'react';
import { Alert, Pressable, TextInput, View } from 'react-native';
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
  const [newCheckListElement, setNewCheckListElement] = useState('');

  const onEndEditing = (newElement: string) => {
    isEdit
      ? setNewCheckListElement(newElement)
      : Alert.alert('읽기상태입니다!', '오른쪽 아래 버튼을 눌러주세요');
  };

  const onChangeTextHandler = async (answer: answerButtonOfType) => {
    await setCheckLists(
      checkLists.map((questionItem) =>
        questionItem.questionId === mainQuestionItem.questionId
          ? ({
              ...questionItem,
              answer: {
                ans: [
                  ...questionItem.answer.ans.map((answerItem) =>
                    answerItem.description === answer.description
                      ? { ...answerItem, type: newCheckListElement }
                      : { ...answerItem, val: false }
                  ),
                ],
              },
            } as checkList)
          : ({ ...questionItem } as checkList)
      )
    );
  };

  return (
    <>
      {mainQuestionItem.answer.ans.map((answer) => (
        <View style={styles.typeBBtnWrapper}>
          <TextInput
            autoCorrect={false}
            onChangeText={onEndEditing}
            onEndEditing={() => onChangeTextHandler(answer)}
            placeholder={'직접 입력'}
            value={newCheckListElement}
            style={styles.typeDBtnWrapper}
          />
          <DefaultText style={styles.checkListGrayText}> {answer.description}</DefaultText>
        </View>
      ))}
    </>
  );
}

export default ButtonsOfTypeA;
