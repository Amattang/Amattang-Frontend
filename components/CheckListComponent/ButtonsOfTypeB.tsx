import React, { Dispatch, SetStateAction, useState } from 'react';
import { TextInput, View } from 'react-native';
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

function ButtonsOfTypeA({ isEdit, checkList, setCheckLists, checkLists }: IProps) {
  const [newCheckListElement, setNewCheckListElement] = useState('');

  const onEndEditing = (newElement: string) => {
    isEdit && setNewCheckListElement(newElement);
  };

  const onChangeTextHandler = async (answer: answerButtonOfType) => {
    await setCheckLists(
      checkLists.map((questionItem) =>
        questionItem.questionId === checkList.questionId
          ? ({
              ...questionItem,
              answer: [
                ...questionItem.answer.map((answerItem) =>
                  answerItem.description === answer.description
                    ? { ...answerItem, type: newCheckListElement }
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
        <View style={styles.typeBBtnWrapper}>
          <KeyboardAwareScrollView extraHeight={150}>
            <TextInput
              autoCorrect={false}
              onChangeText={onEndEditing}
              onEndEditing={() => onChangeTextHandler(answer)}
              placeholder={'직접 입력'}
              value={newCheckListElement}
              style={styles.typeDBtnWrapper}
            />
          </KeyboardAwareScrollView>
          <DefaultText style={styles.checkListGrayText}> {answer.description}</DefaultText>
        </View>
      ))}
    </>
  );
}

export default ButtonsOfTypeA;
