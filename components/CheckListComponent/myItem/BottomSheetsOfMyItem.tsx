import React, { RefObject } from 'react';
import { BottomSheetBackgroundProps, BottomSheetModal } from '@gorhom/bottom-sheet';
import { View } from 'react-native';
import { DefaultText } from '../../../CustomText';
import { myItemType } from '../../../types/checkListTypes';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface IProps {
  onDismissHandler: () => void;
  onAnimateHandler: () => void;
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
  isEdit,
  bottomSheetModalRef,
  snapPoints,
  handleSheetChanges,
  clickedMyItem,
}: IProps) {
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
        <DefaultText>Awesome 🎉</DefaultText>

        <DefaultText>{clickedMyItem?.categoryName}</DefaultText>
      </View>
    </BottomSheetModal>
  );
}

export default BottomSheetsOfMyItem;
