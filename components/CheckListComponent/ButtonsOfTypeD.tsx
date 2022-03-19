import React, { Dispatch, SetStateAction, useState } from 'react';
import { Alert, Pressable, TextInput } from 'react-native';
import { answerButtonOfType, checkListTypes } from '../../types/checkListTypes';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface IProps {
  isEdit: boolean;
  checkList: checkListTypes;
  checkLists: checkListTypes[];
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function ButtonsOfTypeD({ isEdit, checkList, setCheckLists, checkLists }: IProps) {
  const [newCheckListElement, setNewCheckListElement] = useState('');

  const onChangeTextHandler = (newElement: string) => {
    isEdit && setNewCheckListElement(newElement);
  };

  const onEndEditing = async () => {
    newCheckListElement &&
      (await setCheckLists(
        checkLists.map((questionItem) =>
          questionItem.questionId === checkList.questionId
            ? ({
                ...questionItem,
                answer: [...questionItem.answer, { type: newCheckListElement, val: true }],
              } as checkListTypes)
            : ({ ...questionItem } as checkListTypes)
        )
      ));
    await setNewCheckListElement('');
  };

  const onPressHandler = (answer: answerButtonOfType) => {
    isEdit
      ? setCheckLists(
          checkLists.map((questionItem) =>
            questionItem.questionId === checkList.questionId
              ? ({
                  ...questionItem,
                  answer: [
                    ...questionItem.answer.map((answerItem) =>
                      answerItem.type === answer.type
                        ? { ...answerItem, val: !answerItem.val }
                        : { ...answerItem }
                    ),
                  ],
                } as checkListTypes)
              : ({ ...questionItem } as checkListTypes)
          )
        )
      : Alert.alert('읽기상태입니다!', '오른쪽 아래 버튼을 눌러주세요');
  };

  return (
    <>
      {checkList.answer.map((answer) => (
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
      <KeyboardAwareScrollView extraHeight={150}>
        <TextInput
          autoCorrect={false}
          onChangeText={onChangeTextHandler}
          onEndEditing={onEndEditing}
          placeholder={'+ 직접 입력'}
          value={newCheckListElement}
          style={[styles.typeDBtnWrapper, styles.typeDInputBtnWrapper]}
        />
      </KeyboardAwareScrollView>
    </>
  );
}

export default ButtonsOfTypeD;
