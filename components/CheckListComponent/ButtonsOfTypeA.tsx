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

  const onPressHandler = (answer: answerButtonType) => {
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

    (checkListContext?.choseCheckListByServer.typeA as choseCheckListItemByServerType[]).some(
      (item) => item.questionId === checkList.questionId
    )
      ? isEdit &&
        checkListContext?.setChoseCheckListByServer({
          ...checkListContext?.choseCheckListByServer,
          typeA: [
            ...(
              checkListContext?.choseCheckListByServer.typeA as choseCheckListItemByServerType[]
            ).map((item) =>
              item.questionId === checkList.questionId
                ? {
                    ...item,
                    answer: item.answer.map((answerItem) =>
                      answerItem.type === answer.type
                        ? { ...answerItem, val: true }
                        : { ...answerItem, val: false }
                    ),
                  }
                : { ...item }
            ),
          ],
        })
      : isEdit &&
        checkListContext?.setChoseCheckListByServer({
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
        });
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
