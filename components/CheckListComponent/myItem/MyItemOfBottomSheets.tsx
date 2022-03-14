import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import { BottomSheetBackgroundProps, BottomSheetModal } from '@gorhom/bottom-sheet';
import { ScrollView, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';

import { myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from '../styles';
import CreateMyItemButtonOfBottomSheets from './CreateMyItemButtonOfBottomSheets';
import DeleteMyItemButtonOfBottomSheets from './DeleteMyItemButtonOfBottomSheets';
import MyItemElementOfBottomSheets from './MyItemElementOfBottomSheets';

interface IProps {
  onDismissHandler: () => void;
  onAnimateHandler: () => void;
  setClickedMyItem: Dispatch<SetStateAction<myItemType | null>>;
  setMyItems: Dispatch<SetStateAction<myItemType[]>>;
  myItems: myItemType[];
  isEdit: boolean;
  snapPoints: string[];
  renderBackdrop: React.FC<BottomSheetBackgroundProps>;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  handleSheetChanges: (index: number) => void;
  clickedMyItem: myItemType | null;
}

function MyItemOfBottomSheets({
  renderBackdrop,
  onDismissHandler,
  onAnimateHandler,
  setClickedMyItem,
  setMyItems,
  myItems,
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

  const onCreateQuestionElementHandler = async () => {
    newElement && clickedMyItem?.question
      ? setClickedMyItem({
          ...clickedMyItem,
          question: [
            ...clickedMyItem?.question,
            { content: newElement, questionId: uuid.v4(), checked: false },
          ],
        } as myItemType)
      : setClickedMyItem({
          ...clickedMyItem,
          question: [{ content: newElement, questionId: uuid.v4(), checked: false }],
        } as myItemType);
    setNewElement('');
  };

  const onCreateQuestionElementTextHandler = (elementText: string) => {
    setNewElement(elementText);
  };

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
      <View style={[styles.myItemBottomSheetWrapper]}>
        {clickedMyItem?.categoryId && (
          <DeleteMyItemButtonOfBottomSheets
            clickedMyItem={clickedMyItem}
            bottomSheetModalRef={bottomSheetModalRef}
            setMyItems={setMyItems}
            myItems={myItems}
          />
        )}
        <TextInput
          style={{ width: 100, height: 50 }}
          value={clickedMyItem?.categoryName}
          placeholder={'새 그룹'}
          onChangeText={(newCategoryName) => onCategoryNameHandler(newCategoryName)}
        />
        <ScrollView>
          {clickedMyItem?.question?.map((clickedMyItemElements) => (
            <MyItemElementOfBottomSheets
              setClickedMyItem={setClickedMyItem}
              clickedMyItem={clickedMyItem}
              clickedMyItemElements={clickedMyItemElements}
            />
          ))}
          <TextInput
            placeholder={'+ 항목 추가'}
            value={newElement}
            onChangeText={(elementText) => onCreateQuestionElementTextHandler(elementText)}
            onEndEditing={onCreateQuestionElementHandler}
          />
        </ScrollView>
        <CreateMyItemButtonOfBottomSheets
          clickedMyItem={clickedMyItem}
          bottomSheetModalRef={bottomSheetModalRef}
          setMyItems={setMyItems}
          myItems={myItems}
        />
      </View>
    </BottomSheetModal>
  );
}

export default MyItemOfBottomSheets;
