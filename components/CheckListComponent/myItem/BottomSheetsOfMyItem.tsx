import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import { BottomSheetBackgroundProps, BottomSheetModal } from '@gorhom/bottom-sheet';
import { Alert, Image, Pressable, ScrollView, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';

import { DefaultText } from '../../../CustomText';
import { myItemElementHandlerType, myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from '../styles';

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

function BottomSheetsOfMyItem({
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

  const onCreateCategoryHandler = () => {
    if (clickedMyItem?.categoryName === '') {
      Alert.alert('그룹 이름을 정해주세요');
    }
    bottomSheetModalRef?.current?.dismiss();
    clickedMyItem?.categoryId
      ? setTimeout(() => {
          setMyItems([
            ...myItems.map((elements) =>
              elements.categoryId === clickedMyItem?.categoryId
                ? { ...clickedMyItem }
                : { ...elements }
            ),
          ]);
        }, 500)
      : setTimeout(() => {
          setMyItems([...myItems, { ...clickedMyItem, categoryId: uuid.v4() }]);
        }, 500);
  };

  const onDeleteMyItemHandler = () => {
    bottomSheetModalRef?.current?.dismiss();
    setTimeout(() => {
      setMyItems(myItems.filter((item) => item.categoryId !== clickedMyItem?.categoryId));
    }, 500);
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
          <Pressable onPress={onDeleteMyItemHandler}>
            <Image source={require('../../../assets/images/checkList/trash.png')} />
          </Pressable>
        )}
        <View>
          <TextInput
            style={{ width: 100, height: 50 }}
            value={clickedMyItem?.categoryName}
            placeholder={'새 그룹'}
            onChangeText={(newCategoryName) => onCategoryNameHandler(newCategoryName)}
          />
          <ScrollView>
            {clickedMyItem?.question?.map((clickedMyItemElements) => (
              <View>
                {clickedMyItemElements.checked ? (
                  <Image source={require('../../../assets/images/checkList/checkedCheckBox.png')} />
                ) : (
                  <Image
                    source={require('../../../assets/images/checkList/unCheckedCheckBox.png')}
                  />
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
                <DefaultText>--------------------</DefaultText>
              </View>
            ))}
            <TextInput
              placeholder={'+ 항목 추가'}
              value={newElement}
              onChangeText={(elementText) => onCreateQuestionElementTextHandler(elementText)}
              onEndEditing={onCreateQuestionElementHandler}
            />
          </ScrollView>
        </View>
        <Pressable
          onPress={onCreateCategoryHandler}
          style={[
            styles.myItemInputBox,
            styles.checkListFocusedBlue,
            styles.myItem,
            styles.myItemBottomSheetFinishButton,
          ]}
        >
          <DefaultText style={styles.whiteText}>완료</DefaultText>
        </Pressable>
      </View>
    </BottomSheetModal>
  );
}

export default BottomSheetsOfMyItem;
