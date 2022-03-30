import React, { Dispatch, RefObject, SetStateAction, useContext } from 'react';
import { Alert, Pressable } from 'react-native';
import styles from '../styles';
import { DefaultText } from '../../../CustomText';
import { myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import axios from 'axios';
import { GetMyItemServerData } from '../../../api/GetMyItemServerData';
import { checkListCtx } from '../../../Context/CheckListByServer';

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
  const checkListContext = useContext(checkListCtx);
  const onCreateCategoryHandler = () => {
    if (clickedMyItem?.categoryName === '') {
      Alert.alert('그룹 이름을 정해주세요');
    }
    bottomSheetModalRef?.current?.dismiss();
    // id 있으면 수정하는 로직으로 구성
    try {
      axios.post(`/api/check-list/${checkListContext?.checkListId}/custom`, clickedMyItem);
    } catch (error) {
      console.error(error);
    }

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
      : null;
    setTimeout(() => {
      GetMyItemServerData({ setMyItems, checkListId: checkListContext?.checkListId });
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
