import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import { BottomSheetBackgroundProps, BottomSheetModal } from '@gorhom/bottom-sheet';
import { TextInput, View } from 'react-native';
import { DefaultText } from '../../../CustomText';
import { myItemElementHandlerType, myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface IProps {
  onDismissHandler: () => void;
  onAnimateHandler: () => void;
  setClickedMyItem: Dispatch<SetStateAction<myItemType | null>>;
  setMyItems: Dispatch<SetStateAction<myItemType[]>>;
  isEdit: boolean;
  snapPoints: string[];
  renderBackdrop: React.FC<BottomSheetBackgroundProps>;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  handleSheetChanges: (index: number) => void;
  clickedMyItem: myItemType | null;
}

function BottomSheetsOfMyItem({
  renderBackdrop,
  onDismissHandler,
  onAnimateHandler,
  setClickedMyItem,
  setMyItems,
  bottomSheetModalRef,
  snapPoints,
  handleSheetChanges,
  clickedMyItem,
}: IProps) {
  const [newElement, setNewElement] = useState('');

  const onCategoryNameHandler = (newCategoryName: string) => {
    setClickedMyItem({
      ...clickedMyItem,
      categoryName: newCategoryName,
    } as myItemType);
  };

  const onChangeQuestionElementHandler = ({
    onChangedQuestionElement,
    clickedMyItemElements,
  }: myItemElementHandlerType) => {
    setClickedMyItem({
      ...clickedMyItem,
      question: [
        ...clickedMyItem?.question.map((newClickedMyItemElement) =>
          clickedMyItemElements.questionId === newClickedMyItemElement.questionId
            ? { ...newClickedMyItemElement, content: onChangedQuestionElement }
            : { ...newClickedMyItemElement }
        ),
      ],
    } as myItemType);
  };
  const onCreateQuestionElementHandler = () => {
    setClickedMyItem({
      ...clickedMyItem,
      question: [
        ...clickedMyItem?.question,
        { content: newElement, questionId: 'asdf', checked: false },
      ],
    } as myItemType);
  };

  const onCreateQuestionElementTextHandler = async (elementText: string) => {
    await setNewElement(elementText);
    await setNewElement('');
  };

  const onDeleteQuestionElementHandler = () => {};

  return (
    <BottomSheetModal
      detached={true}
      backdropComponent={renderBackdrop}
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      onAnimate={onAnimateHandler}
      onDismiss={onDismissHandler}
      index={1}
      onChange={handleSheetChanges}
    >
      <View>
        <TextInput
          value={clickedMyItem?.categoryName}
          placeholder={'새 그룹'}
          onChangeText={(newCategoryName) => onCategoryNameHandler(newCategoryName)}
        />
        {clickedMyItem?.question.map((clickedMyItemElements) => (
          <>
            <TextInput
              value={clickedMyItemElements.content}
              onChangeText={(onChangedQuestionElement) =>
                onChangeQuestionElementHandler({ onChangedQuestionElement, clickedMyItemElements })
              }
            />
            <DefaultText>--------------------</DefaultText>
            <DefaultText>{clickedMyItemElements.content}</DefaultText>
          </>
        ))}
        <TextInput
          placeholder={'+ 항목 추가'}
          value={newElement}
          onEndEditing={onCreateQuestionElementHandler}
          onChangeText={(elementText) => onCreateQuestionElementTextHandler(elementText)}
        />
      </View>
    </BottomSheetModal>
  );
}

export default BottomSheetsOfMyItem;
