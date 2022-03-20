import React, { Dispatch, SetStateAction } from 'react';
import { myItemElementType, myItemType } from '../../../types/checkListTypes';
import { Image, View } from 'react-native';
import styles from '../styles';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface IProps {
  setClickedMyItem: Dispatch<SetStateAction<myItemType | null>>;
  clickedMyItem: myItemType;
  isEdit: boolean;
  clickedMyItemElements: myItemElementType;
}

function MyItemElementOfBottomSheets({
  setClickedMyItem,
  clickedMyItem,
  isEdit,
  clickedMyItemElements,
}: IProps) {
  const onChangeQuestionElementHandler = (onChangedQuestionElement: string) => {
    onChangedQuestionElement === ''
      ? setClickedMyItem({
          ...clickedMyItem,
          questions: clickedMyItem?.questions.filter(
            (newClickedMyItemElement) =>
              clickedMyItemElements.questionId !== newClickedMyItemElement.questionId
          ),
        } as myItemType)
      : setClickedMyItem({
          ...clickedMyItem,
          questions: clickedMyItem?.questions.map((newClickedMyItemElement) =>
            clickedMyItemElements?.questionId === newClickedMyItemElement.questionId
              ? { ...newClickedMyItemElement, content: onChangedQuestionElement }
              : { ...newClickedMyItemElement }
          ),
        } as myItemType);
  };
  return (
    <View style={styles.myItemElementsOfBottomSheets}>
      {clickedMyItemElements.checked ? (
        <Image source={require('../../../assets/images/checkList/checkedCheckBox.png')} />
      ) : (
        <Image source={require('../../../assets/images/checkList/unCheckedCheckBox.png')} />
      )}
      {clickedMyItemElements && (
        <BottomSheetTextInput
          editable={isEdit}
          style={styles.myItemEachElementOfBottomSheets}
          value={clickedMyItemElements.content}
          onChangeText={(onChangedQuestionElement) =>
            onChangeQuestionElementHandler(onChangedQuestionElement)
          }
        />
      )}
    </View>
  );
}

export default MyItemElementOfBottomSheets;
