import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { TextInput, View } from 'react-native';
import {
  answerButtonType,
  checkListTypes,
  choseCheckListItemByServerType,
} from '../../types/checkListTypes';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { checkListCtx } from '../../Context/CheckListByServer';

interface IProps {
  isEdit: boolean;
  checkList: checkListTypes;
  checkLists: checkListTypes[];
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function ButtonsOfTypeA({ isEdit, checkList, setCheckLists, checkLists }: IProps) {
  const checkListContext = useContext(checkListCtx);

  const [newCheckListElement, setNewCheckListElement] = useState('');

  const onEndEditing = (newElement: string) => {
    isEdit && setNewCheckListElement(newElement);
  };

  const onChangeTextHandler = async (answer: answerButtonType) => {
    isEdit &&
      (await checkListContext?.setChoseCheckListByServer({
        ...checkListContext?.choseCheckListByServer,
        typeB: [
          ...(checkListContext?.choseCheckListByServer.typeB as choseCheckListItemByServerType[]),
          {
            questionId: checkList.questionId,
            answer: [
              ...checkList.answer.map((answerItem) =>
                answerItem.description === answer.description
                  ? { ...answerItem, type: newCheckListElement }
                  : { ...answerItem, val: false }
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
                    answerItem.description === answer.description
                      ? { ...answerItem, type: newCheckListElement }
                      : { ...answerItem, val: false }
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
        <View style={styles.typeBBtnWrapper} key={`${checkList.questionId}-${index}`}>
          <KeyboardAwareScrollView style={{ padding: 0 }} extraHeight={150}>
            <TextInput
              autoCorrect={false}
              onChangeText={onEndEditing}
              onEndEditing={() => onChangeTextHandler(answer)}
              placeholder={'직접 입력'}
              value={newCheckListElement}
              style={[styles.typeDBtnWrapper]}
            />
          </KeyboardAwareScrollView>
          <DefaultText style={[styles.checkListGrayText, { marginRight: 10 }]}>
            {answer.description}
          </DefaultText>
        </View>
      ))}
    </>
  );
}

export default ButtonsOfTypeA;
