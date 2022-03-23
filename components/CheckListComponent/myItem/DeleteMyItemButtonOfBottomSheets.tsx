import React, { Dispatch, RefObject, SetStateAction, useContext } from 'react';
import { Image, Pressable } from 'react-native';
import { myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from '../styles';
import { GetMyItemServerData } from '../../../api/GetMyItemServerData';
import axios from 'axios';
import { checkListCtx } from '../../../Context/CheckListByServer';

interface IProps {
  clickedMyItem: myItemType | null;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  isEdit: boolean;
  setMyItems: Dispatch<SetStateAction<myItemType[]>>;
  myItems: myItemType[];
}

function DeleteMyItemButtonOfBottomSheets({
  bottomSheetModalRef,
  setMyItems,
  isEdit,
  myItems,
  clickedMyItem,
}: IProps) {
  const checkListContext = useContext(checkListCtx);
  const onDeleteMyItemHandler = () => {
    isEdit && bottomSheetModalRef?.current?.dismiss();
    isEdit &&
      setTimeout(async () => {
        await axios.delete(
          `api/check-list/${checkListContext?.checkListId}/custom?categoryId=${clickedMyItem?.categoryId}`
        );

        await GetMyItemServerData({ setMyItems, checkListId: checkListContext?.checkListId });
        setMyItems(myItems.filter((item) => item.categoryId !== clickedMyItem?.categoryId));
      }, 500);
  };
  return (
    <Pressable style={styles.deleteMyItem} onPress={onDeleteMyItemHandler}>
      <Image source={require('../../../assets/images/checkList/trash.png')} />
    </Pressable>
  );
}

export default DeleteMyItemButtonOfBottomSheets;
