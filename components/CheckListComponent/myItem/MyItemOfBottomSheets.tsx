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
  isEdit,
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
        <TextInput
          style={styles.myItemCategoryName}
          value={clickedMyItem?.categoryName}
          placeholder={'새 그룹'}
          editable={isEdit}
          onChangeText={(newCategoryName) => onCategoryNameHandler(newCategoryName)}
        />
        <ScrollView>
          {clickedMyItem?.question?.map((clickedMyItemElements) => (
            <MyItemElementOfBottomSheets
              isEdit={isEdit}
              setClickedMyItem={setClickedMyItem}
              clickedMyItem={clickedMyItem}
              clickedMyItemElements={clickedMyItemElements}
            />
          ))}
          <TextInput
            style={styles.addMyItemEachElementOfBottomSheets}
            placeholder={'+ 항목 추가'}
            value={newElement}
            editable={isEdit}
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
      {clickedMyItem?.categoryId && (
        <DeleteMyItemButtonOfBottomSheets
          isEdit={isEdit}
          clickedMyItem={clickedMyItem}
          bottomSheetModalRef={bottomSheetModalRef}
          setMyItems={setMyItems}
          myItems={myItems}
        />
      )}
    </BottomSheetModal>
  );
}

export default MyItemOfBottomSheets;
