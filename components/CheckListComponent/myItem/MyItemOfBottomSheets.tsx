import React, { createRef, Dispatch, RefObject, SetStateAction, useState } from 'react';
import {
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { KeyboardAvoidingViewComponent, ScrollView, Text, TextInput, View } from 'react-native';

import { myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from '../styles';
import CreateMyItemButtonOfBottomSheets from './CreateMyItemButtonOfBottomSheets';
import DeleteMyItemButtonOfBottomSheets from './DeleteMyItemButtonOfBottomSheets';
import MyItemElementOfBottomSheets from './MyItemElementOfBottomSheets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
  const [newCategory, setNewCategory] = useState('');
  const onCategoryNameHandler = async () => {
    await setClickedMyItem({
      ...clickedMyItem,
      categoryName: newCategory,
    } as myItemType);
    setNewCategory('');
  };

  const [newElement, setNewElement] = useState('');
  const onCreateQuestionElementHandler = async () => {
    clickedMyItem?.questions
      ? await setClickedMyItem({
          ...clickedMyItem,
          questions: [...clickedMyItem?.questions, { content: newElement, checked: false }],
        } as myItemType)
      : await setClickedMyItem({
          ...clickedMyItem,
          questions: [{ content: newElement, checked: false }],
        } as myItemType);
    return null;
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
        <BottomSheetTextInput
          style={styles.myItemCategoryName}
          placeholder={clickedMyItem?.categoryName || '??? ??????'}
          placeholderTextColor={'#D6D4D4'}
          editable={isEdit}
          onChangeText={(newCategoryName) => setNewCategory(newCategoryName)}
          onEndEditing={onCategoryNameHandler}
        />
        <ScrollView>
          {clickedMyItem?.questions?.map((clickedMyItemElements) => (
            <MyItemElementOfBottomSheets
              key={clickedMyItemElements.questionId}
              isEdit={isEdit}
              setClickedMyItem={setClickedMyItem}
              clickedMyItem={clickedMyItem}
              clickedMyItemElements={clickedMyItemElements}
            />
          ))}
          {newElement ? (
            <BottomSheetTextInput
              style={styles.addMyItemEachElementOfBottomSheets}
              placeholder={'+ ?????? ??????'}
              placeholderTextColor={'#999999'}
              editable={isEdit}
              onChangeText={(elementText) => setNewElement(elementText)}
              onEndEditing={onCreateQuestionElementHandler}
            />
          ) : (
            <BottomSheetTextInput
              style={styles.addMyItemEachElementOfBottomSheets}
              placeholder={'+ ?????? ??????'}
              placeholderTextColor={'#999999'}
              editable={isEdit}
              value={''}
              onChangeText={(elementText) => setNewElement(elementText)}
              onEndEditing={onCreateQuestionElementHandler}
            />
          )}
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
