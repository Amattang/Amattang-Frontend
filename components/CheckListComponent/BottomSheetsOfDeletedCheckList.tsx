import React, { Dispatch, Ref, SetStateAction } from 'react';
import {
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { Button, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import { mainBlue } from '../../color';
import { checkList } from '../../types/checkListTypes';
import { SharedValue } from 'react-native-reanimated';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface IProps {
  onAnimateHandler: () => void;
  onDismissHandler: () => void;
  renderBackdrop: React.FC<BottomSheetBackgroundProps>;
  bottomSheetModalRef: Ref<BottomSheetModalMethods> | undefined;
  snapPoints: (string | number)[] | SharedValue<(string | number)[]>;
  checkLists: checkList[];
}

function BottomSheetsOfDeletedCheckList({
  onAnimateHandler,
  onDismissHandler,
  renderBackdrop,
  bottomSheetModalRef,
  snapPoints,
  checkLists,
}: IProps) {
  return (
    <>
      <BottomSheetModal
        index={1}
        detached={true}
        backdropComponent={renderBackdrop}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onAnimate={onAnimateHandler}
        onDismiss={onDismissHandler}
      >
        <BottomSheetScrollView>
          {checkLists
            .filter((CheckLists) => CheckLists.deleted)
            .map((deletedCheckList) => (
              <Pressable>
                <DefaultText>{deletedCheckList.question}</DefaultText>
              </Pressable>
            ))}
        </BottomSheetScrollView>
        <View style={{ width: 150, marginBottom: 30 }}>
          <Button title={'모두 선택'} color={mainBlue} />
        </View>
      </BottomSheetModal>
    </>
  );
}

export default BottomSheetsOfDeletedCheckList;
