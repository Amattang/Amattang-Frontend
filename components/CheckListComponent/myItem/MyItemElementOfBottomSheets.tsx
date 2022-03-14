import React, { Dispatch, SetStateAction } from 'react';
import {
  myItemElementHandlerType,
  myItemElementType,
  myItemType,
} from '../../../types/checkListTypes';
import { Image, TextInput, View } from 'react-native';

interface IProps {
  setClickedMyItem: Dispatch<SetStateAction<myItemType | null>>;
  clickedMyItem: myItemType;
  clickedMyItemElements: myItemElementType;
}

function MyItemElementOfBottomSheets({
  setClickedMyItem,
  clickedMyItem,
  clickedMyItemElements,
}: IProps) {
  const onChangeQuestionElementHandler = ({
    onChangedQuestionElement,
    clickedMyItemElements,
  }: myItemElementHandlerType) => {
    onChangedQuestionElement === ''
      ? setClickedMyItem({
          ...clickedMyItem,
          question: clickedMyItem?.question.filter(
            (newClickedMyItemElement) =>
              clickedMyItemElements.questionId !== newClickedMyItemElement.questionId
          ),
        } as myItemType)
      : setClickedMyItem({
          ...clickedMyItem,
          question: clickedMyItem?.question.map((newClickedMyItemElement) =>
            clickedMyItemElements?.questionId === newClickedMyItemElement.questionId
              ? { ...newClickedMyItemElement, content: onChangedQuestionElement }
              : { ...newClickedMyItemElement }
          ),
        } as myItemType);
  };
  return (
    <View>
      {clickedMyItemElements.checked ? (
        <Image source={require('../../../assets/images/checkList/checkedCheckBox.png')} />
      ) : (
        <Image source={require('../../../assets/images/checkList/unCheckedCheckBox.png')} />
      )}
      {clickedMyItemElements && (
        <TextInput
          value={clickedMyItemElements.content}
          onChangeText={(onChangedQuestionElement) =>
            onChangeQuestionElementHandler({
              onChangedQuestionElement,
              clickedMyItemElements,
            })
          }
        />
      )}
    </View>
  );
}

export default MyItemElementOfBottomSheets;
