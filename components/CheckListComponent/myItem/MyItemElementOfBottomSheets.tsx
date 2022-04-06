import React, { Dispatch, SetStateAction, useState } from 'react';
import { myItemElementType, myItemType } from '../../../types/checkListTypes';
import { Image, View } from 'react-native';
import styles from '../styles';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { DefaultText } from '../../../CustomText';

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
  const [onChangedQuestionElement, setOnChangedQuestionElement] = useState('');
  const onChangeQuestionElementHandler = () => {
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
    <View key={clickedMyItem.categoryId} style={styles.myItemElementsOfBottomSheets}>
      {clickedMyItemElements.checked ? (
        <Image source={require('../../../assets/images/checkList/checkedCheckBox.png')} />
      ) : (
        <Image source={require('../../../assets/images/checkList/unCheckedCheckBox.png')} />
      )}
      {clickedMyItemElements && (
        <BottomSheetTextInput
          editable={isEdit}
          placeholder={clickedMyItemElements.content || '+ 항목 추가'}
          placeholderTextColor={'#999999'}
          style={styles.myItemEachElementOfBottomSheets}
          onChangeText={(onChangText: string) => setOnChangedQuestionElement(onChangText)}
          onEndEditing={onChangeQuestionElementHandler}
        />
      )}
    </View>
  );
}

export default MyItemElementOfBottomSheets;
