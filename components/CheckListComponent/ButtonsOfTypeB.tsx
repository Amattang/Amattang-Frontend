import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { TextInput, View } from 'react-native';
import {
  answerButtonType,
  checkListTypes,
  choseCheckListItemByServerType,
} from '../../types/checkListTypes';
import produce from 'immer';

import styles from './styles';
import { DefaultText } from '../../CustomText';
import { checkListCtx } from '../../Context/CheckListByServer';

interface IProps {
  isEdit: boolean;
  checkList: checkListTypes;
  checkLists: checkListTypes[];
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function ButtonsOfTypeB({ isEdit, checkList, setCheckLists, checkLists }: IProps) {
  const checkListContext = useContext(checkListCtx);

  const [newCheckListElement, setNewCheckListElement] = useState('');

  const onChangeText = (newElement: string) => {
    isEdit && setNewCheckListElement(newElement);
  };

  const onEndEditing = (answer: answerButtonType) => {
    isEdit &&
      setCheckLists(
        checkLists.map((questionItem) =>
          questionItem.questionId === checkList.questionId
            ? ({
                ...questionItem,
                answer: [
                  ...questionItem.answer.map((answerItem) =>
                    answerItem.description === answer.description
                      ? { ...answerItem, type: newCheckListElement }
                      : { ...answerItem }
                  ),
                ],
              } as checkListTypes)
            : ({ ...questionItem } as checkListTypes)
        )
      );

    (checkListContext?.choseCheckListByServer.typeB as choseCheckListItemByServerType[]).some(
      (item) => item.questionId === checkList.questionId
    )
      ? isEdit &&
        checkListContext?.setChoseCheckListByServer({
          ...checkListContext?.choseCheckListByServer,
          typeB: [
            ...(
              checkListContext?.choseCheckListByServer.typeB as choseCheckListItemByServerType[]
            ).map((item) =>
              item.questionId === checkList.questionId
                ? {
                    ...item,
                    answer: item.answer.map((answerItem) =>
                      answerItem.description === answer.description
                        ? { ...answerItem, type: newCheckListElement }
                        : { ...answerItem }
                    ),
                  }
                : { ...item }
            ),
          ],
        })
      : isEdit &&
        checkListContext?.setChoseCheckListByServer({
          ...checkListContext?.choseCheckListByServer,
          typeB: [
            ...(checkListContext?.choseCheckListByServer.typeB as choseCheckListItemByServerType[]),
            {
              questionId: checkList.questionId,
              answer: checkList.answer.map((answerItem) =>
                answerItem.description === answer.description
                  ? { ...answerItem, type: newCheckListElement }
                  : { ...answerItem }
              ),
            },
          ],
        });
    console.log(checkListContext?.choseCheckListByServer);
    setNewCheckListElement('');
  };

  return (
    <>
      {checkList.answer.map((answer, index) => (
        <View style={styles.typeBBtnWrapper} key={`${checkList.questionId}-${index}`}>
          <TextInput
            editable={isEdit}
            autoCorrect={false}
            onChangeText={onChangeText}
            onEndEditing={() => onEndEditing(answer)}
            placeholder={answer.type ? answer.type : '직접 입력'}
            style={[styles.typeDBtnWrapper]}
          />
          <DefaultText style={[styles.checkListGrayText, { marginRight: 10 }]}>
            {answer.description}
          </DefaultText>
        </View>
      ))}
    </>
  );
}

export default ButtonsOfTypeB;
