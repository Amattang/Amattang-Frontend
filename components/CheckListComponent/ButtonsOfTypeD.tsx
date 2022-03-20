import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import {
  answerButtonType,
  checkListTypes,
  choseCheckListItemByServerType,
} from '../../types/checkListTypes';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import { checkListCtx } from '../../Context/CheckListByServer';

interface IProps {
  isEdit: boolean;
  checkList: checkListTypes;
  checkLists: checkListTypes[];
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function ButtonsOfTypeD({ isEdit, checkList, setCheckLists, checkLists }: IProps) {
  const checkListContext = useContext(checkListCtx);

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

  const onPressHandler = async (answer: answerButtonType) => {
    isEdit &&
      (await checkListContext?.setChoseCheckListByServer({
        ...checkListContext?.choseCheckListByServer,
        typeD: [
          ...(checkListContext?.choseCheckListByServer.typeD as choseCheckListItemByServerType[]),
          {
            questionId: checkList.questionId,
            answer: [
              ...checkList.answer.map((answerItem) =>
                answerItem.type === answer.type
                  ? { ...answerItem, val: !answerItem.val }
                  : { ...answerItem }
              ),
            ],
          },
        ],
      }));
    isEdit &&
      (await setCheckLists(
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
      ));
  };

  return (
    <>
      {checkList.answer.map((answer, index) => (
        <Pressable
          key={`${checkList.questionId}-${index}`}
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
        style={[styles.typeDBtnWrapper, styles.typeDInputBtnWrapper]}
      />
    </>
  );
}

export default ButtonsOfTypeD;
