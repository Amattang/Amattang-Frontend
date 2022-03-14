import React, { Dispatch, RefObject, SetStateAction } from 'react';
import { Image, Pressable } from 'react-native';
import { myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface IProps {
  clickedMyItem: myItemType | null;
  bottomSheetModalRef: RefObject<BottomSheetModalMethods> | undefined;
  setMyItems: Dispatch<SetStateAction<myItemType[]>>;
  myItems: myItemType[];
}

function DeleteMyItemButtonOfBottomSheets({
  bottomSheetModalRef,
  setMyItems,
  myItems,
  clickedMyItem,
}: IProps) {
  const onDeleteMyItemHandler = () => {
    bottomSheetModalRef?.current?.dismiss();
    setTimeout(() => {
      setMyItems(myItems.filter((item) => item.categoryId !== clickedMyItem?.categoryId));
    }, 500);
  };
  return (
    <Pressable onPress={onDeleteMyItemHandler}>
      <Image source={require('../../../assets/images/checkList/trash.png')} />
    </Pressable>
  );
}

export default DeleteMyItemButtonOfBottomSheets;
