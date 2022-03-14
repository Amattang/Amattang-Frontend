import React, { Dispatch, RefObject, SetStateAction } from 'react';
import { Alert, Pressable } from 'react-native';
import styles from '../styles';
import { DefaultText } from '../../../CustomText';
import uuid from 'react-native-uuid';
import { myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface IProps {
  clickedMyItem: myItemType | null;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  setMyItems: Dispatch<SetStateAction<myItemType[]>>;
  myItems: myItemType[];
}

function CreateMyItemButtonOfBottomSheets({
  clickedMyItem,
  bottomSheetModalRef,
  setMyItems,
  myItems,
}: IProps) {
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
  return (
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
  );
}

export default CreateMyItemButtonOfBottomSheets;
