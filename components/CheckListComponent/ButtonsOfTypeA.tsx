import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Pressable } from 'react-native';
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

function ButtonsOfTypeA({ isEdit, checkList, setCheckLists, checkLists }: IProps) {
  const checkListContext = useContext(checkListCtx);

  const onPressHandler = async (answer: answerButtonType) => {
    isEdit &&
      (await checkListContext?.setChoseCheckListByServer({
        ...checkListContext?.choseCheckListByServer,
        typeA: [
          ...(checkListContext?.choseCheckListByServer.typeA as choseCheckListItemByServerType[]),
          {
            questionId: checkList.questionId,
            answer: [
              ...checkList.answer.map((answerItem) =>
                answerItem.type === answer.type
                  ? { ...answerItem, val: true }
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
                    answerItem.type === answer.type
                      ? { ...answerItem, val: true }
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
        <Pressable
          key={`${checkList.questionId}-${index}`}
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
          <DefaultText style={answer.val ? styles.checkListWhiteText : styles.checkListGrayText}>
            {answer.type}
          </DefaultText>
        </Pressable>
      ))}
    </>
  );
}

export default ButtonsOfTypeA;
